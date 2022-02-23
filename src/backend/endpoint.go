package main

import (
	"fmt"
	"log"
	"net/http"
	"encoding/json"
)

type Article struct {
	Id int `json:"id"`
	Timestamp int `json:"timestamp"`
	Subject string `json:"subject"`
    Details string `json:"details"`
}

type Articles []Article

func allArticles(w http.ResponseWriter, r *http.Request){
	articles := Articles{
		Article{Id:97, Timestamp:97, Subject: "Assunto", Details: "Esta mensagem existe como mockup. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Esta mensagem existe como mockup. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
		Article{Id:98, Timestamp:98, Subject: "Assunto", Details: "Mensagem"},
		Article{Id:99, Timestamp:99, Subject: "Assunto", Details: "Mensagem"},
	}
	fmt.Println("Endpoint Hit: returnAllArticles")
    json.NewEncoder(w).Encode(articles)
}

func homePage(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Welcome to the HomePage!")
}

func handleRequest() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/articles", allArticles)
	log.Fatal(http.ListenAndServe(":3000", nil))
}

func main() {
	handleRequest()
}