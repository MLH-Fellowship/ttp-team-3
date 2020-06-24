import React from "react";
import {Platform, StyleSheet, Text, View  } from "react-native";
import { Link } from "react-router-dom";
import { ImageCarousel } from "./ImageCarousel";

//basic Home page
const HomePageView =(props)=> {

  const images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  ];


    return (
      <div>
        <h2>Welcome to Book Store</h2>
        <p>News</p>
        <View style={styles.container}>
        <ImageCarousel images={images} />
        </View>
        <div>
        <p>Most recent book</p>
          {props.book.map((book) => (
            <div key={book.id}>
              <Link to={`/books/${book.id}`}>
                <img src={book.imageUrl} width="200px" alt={book.title} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}

export default HomePageView;
