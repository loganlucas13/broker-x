package main

// example to send 'hello' response when visiting webpage

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Message struct {
	Text string `json:"text"`
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(Message{Text: "Hello!"})
}

func main() {
	http.HandleFunc("/api/hello", helloHandler)
	fmt.Println("Server is running")
	http.ListenAndServe(":8080", nil)
	if err := http.ListenAndServe(":8080", nil); err != nil {
        fmt.Println("Error starting server:", err)
    }
}