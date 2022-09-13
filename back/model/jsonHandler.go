package model

type listCards struct {
	cardTitle  string
	cardDetail string
}

type boardLists struct {
	listTitle string
	listCards listCards
}

type Board struct {
	boardName  string
	boardLists boardLists
}
