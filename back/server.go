package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", calc)
	http.ListenAndServe(":8090", nil)
}
