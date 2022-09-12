package model

type Todo struct {
	List	string		'json:"list"'
	cards	[]string	'json:"cards"'
 }

 type DBHandler interface {
	AddTitle(List string) *Todo
	AddTodo(cards []string) *Todo
 }