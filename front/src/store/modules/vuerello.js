import todoDatas from "../../data/todoData";

const storage = {
  fetch() {
    const arr = todoDatas[0].boardLists;
    return arr;
  },
};

const state = {
  todoData: storage.fetch(),
};

const getters = {
  storedTodoDatas(state) {
    return state.todoData;  
    }
}

const mutations = {
  //title functions
  wrapperDrag() {
    const title = event.path[0].innerText;
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("selectedItem", title);
  },

  wrapperDrop(state) {
    const selectedItem = event.dataTransfer.getData("selectedItem");
    const xLocation = event.clientX;
    let dropIndex = parseInt((xLocation - 20) / 282);

    let targetIdx;

    const moveData = {
      listTitle: {
        title: selectedItem,
        titleControl: true,
        addCardControl: true,
      },
      listCards: [],
    };

    // 옮기는 데이터의 위치 찾기
    state.todoData.forEach((obj, index) => {
      if (obj.listTitle.title === selectedItem) {
        targetIdx = index;
      }
    });
    // 옮기는 데이터의 카드 데이터 복사
    state.todoData[targetIdx].listCards.forEach((data) => {
      moveData.listCards.push({
        cardTitle: data.cardTitle,
        cardDetail: data.cardDetail,
      });
    });

    // 선택한 카드와 옮기는 위치에 따른 데이터 조정
    // splice(시작하는 위치, 삭제하는 양, 삽입할 데이터)
    if (dropIndex === targetIdx) {
      console.log("moved location was same as start location");
    } else {
      state.todoData.splice(targetIdx, 1);
      if (dropIndex > state.length) {
        dropIndex = state.length;
      }
      state.todoData.splice(dropIndex, 0, moveData);
    }
  },

  titleChangeOpen(state, index) {
    index.listTitle.titleControl = !index.listTitle.titleControl;
  },

  titleChangeClose(state, index) {
    state.todoData[index].listTitle.titleControl = true;
  },

  // card functions
  cardDrag() {
    const cardTitle = event.path[0].innerText;
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("selectedItem", cardTitle);
  },

  cardDrop(state) {
    const selectedItem = event.dataTransfer.getData("selectedItem");

    // 데이터를 옮기는 지점의 좌표 찾기
    const xLocation = event.clientX;
    const yLocation = event.clientY;
    let dropIndexX = parseInt((xLocation - 20) / 282);
    let dropIndexY = parseInt((yLocation - 46) / 38);

    let targetIdx;
    let targetIndex;
    const moveCard = { cardTitle: selectedItem, cardDetail: "" };

    // 옮기는 데이터의 시작 위치 찾기
    state.todoData.forEach((obj, idx) => {
      obj.listCards.forEach((ob, index) => {
        if (ob.cardTitle === selectedItem) {
          targetIdx = idx;
          targetIndex = index;
        }
      });
    });

    // 선택한 카드와 옮기는 위치에 따른 데이터 조정
    // splice(시작하는 위치, 삭제하는 양, 삽입할 데이터)
    if (dropIndexX === targetIdx) {
      if (dropIndexY == targetIndex) {
        console.log("moved location was same as start location");
      } else {
        // 드래그한 데이터 지우기
        state.todoData[targetIdx].listCards.splice(targetIndex, 1);
        // 드롭한 위치에 데이터 넣기
        state.todoData[dropIndexX].listCards.splice(dropIndexY, 0, moveCard);
      }
    } else {
      // 드래그한 데이터 지우기
      state.todoData[targetIdx].listCards.splice(targetIndex, 1);
      // 드롭한 데이터 삽입하기
      if (dropIndexX > state.todoData.length) {
        dropIndexX = state.todoData.length;
      }
      if (dropIndexY > state.todoData[dropIndexX].listCards.length) {
        dropIndexY = state.todoData[dropIndexX].listCards.length;
      }
      state.todoData[dropIndexX].listCards.splice(dropIndexY, 0, moveCard);
    }
  },

  // Add Card controller functions
  addCardBoxOpen(state, index) {
    index.listTitle.addCardControl = !index.listTitle.addCardControl;
  },

  addCardBoxClose(state, index) {
    index.listTitle.addCardControl = true;
  },

  addOneCardOnList(state, newCardValue) {
    let target
    if (event.path.length == 13){
      target = event.path[3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerText
    } else if (event.path.length == 15){
      target = event.path[5].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerText
    }
    let targetIdx;
    state.todoData.forEach((obj, index) => {
      if (obj.listTitle.title === target) {
        targetIdx = index;
      }
    });
    if (newCardValue !== "") {
      const newData = { cardTitle: newCardValue, cardDetail: "" };
      state.todoData[targetIdx].listCards.push(newData);
    }
  },

  // list functions
  addNewList(state, listValue) {
    const newData = {
      listTitle: { title: listValue, titleControl: true, addCardControl: true },
      listCards: [],
    };
    if (listValue !== "") {
      state.todoData.push(newData);
    }
  },
};

export default {
  state,
  getters,
  mutations,
};
