window.addEventListener("DOMContentLoaded", () => {
    // lightbox images
    const imgArr = [
        "./images/fox1.jpeg",
        "./images/fox2.jpeg",
        "./images/fox3.jpeg",
        "./images/fox4.jpeg",
        "./images/fox5.jpeg",
        "./images/fox6.jpeg"
    ];
    // 載入圖片
    imgArr.forEach(url => {
        const image = new Image();
        image.src = url;
    });
    const popContainer = document.querySelector(".popUp-container");
    const popItems = document.querySelectorAll(".light-box-item");
    const popImg = document.querySelector(".popImg-container > img");
    const prevBtn = document.querySelector(".popImg-container .prev");
    const nextBtn = document.querySelector(".popImg-container .next");
    const popClose = document.querySelector(".popImg-container .close");
    const nowPic = document.querySelector(".nowPic");
    const totalPic = document.querySelector(".totalPic");
    let nowPicNum = 1; // 預設目前頁面
    const totalPicNum = imgArr.length; // 照片總數量
    // total pic number
    totalPic.innerText = totalPicNum;
    popItems.forEach(item => {
        item.addEventListener("click", (e) => {
            const src = e.target.dataset.src;
            popImg.src = src;
            imgArr.forEach((url, idx) => {
                if (src === url) {
                    nowPicNum = idx + 1;
                    nowPic.innerText = nowPicNum;
                }
            });
            popContainer.classList.add("active");
        })
    });
    prevBtn.addEventListener("click", () => {
        if (nowPicNum > 1) {
            nowPicNum -= 1;
        } else {
            nowPicNum = 6;
        }
        nowPic.innerText = nowPicNum;
        popImg.src = imgArr[nowPicNum - 1];
    });
    nextBtn.addEventListener("click", () => {
        if (nowPicNum < 6) {
            nowPicNum += 1;
        } else {
            nowPicNum = 1;
        }
        nowPic.innerText = nowPicNum;
        popImg.src = imgArr[nowPicNum - 1];
    });
    popClose.addEventListener("click", () => {
        popContainer.classList.remove("active");
        popImg.src = "";
    });
})