import { useState, useEffect, useRef } from "react";

const useFavorite = (id, slug) => {
  const [isFaved, setIsFaved] = useState(false);
  const refreshed = useRef(false);
  let toggleFav = (e) => {
    e.preventDefault(); //リンクに飛ぶのを防ぐ
    setIsFaved(!isFaved);
  };

  useEffect(() => {
    let favlist = JSON.parse(localStorage.getItem("nuocw-favlist")) || [];
    setIsFaved(favlist.includes(id));
  }, []);

  useEffect(() => {
    if (refreshed.current) {
      let favlist = JSON.parse(localStorage.getItem("nuocw-favlist")) || [];
      if (refreshed && isFaved && !favlist.includes(id)) {
        //追加する
        favlist.push(id);
        localStorage.setItem("nuocw-favlist", JSON.stringify(favlist));
        // お気に入り追加のイベントを送信
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "favoriteAdd", favSlug: slug });
        }
      } else if (refreshed && !isFaved && favlist.includes(id)) {
        //削除する
        let index = favlist.indexOf(id);
        favlist.splice(index, 1);
        localStorage.setItem("nuocw-favlist", JSON.stringify(favlist));
        // お気に入り削除のイベントを送信
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "favoriteRemove", favSlug: slug });
        }
      }
    } else {
      refreshed.current = true;
    }
  }, [isFaved]);

  return [isFaved, toggleFav];
};

export default useFavorite;
