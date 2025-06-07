document.addEventListener('DOMContentLoaded', function() {


    const reviews = [
        {
            name: "Алексей",
            review: "Отличные курсы, много полезной информации. Рекомендую!",
            img: "assets/images/student1.jpg"
        },

        {
            name: "Анжела",
            review: "Очень понравилось обучение, все доступно и понятно. Спасибо!",
            img: "assets/images/student3.jpg"
        },
        {
            name: "Николай",
            review: "Курсы помогли мне разобраться в сложных темах. Большое спасибо!",
            img: "assets/images/student2.png"
        },
        {
            name: "Том Йорк",
            review: "Отличные курсы, помогли мне развить свои навыки. Спасибо!",
            img: "assets/images/tom.jpg"
        },
        {
            name: "Стефан",
            review: "Интересные задания и понятные объяснения. Рекомендую начинающим!",
            img: "assets/images/student1.jpg"
        },
        {
            name: "Марина",
            review: "Курсы помогли мне справиться с трудными задачами. Очень довольна результатом!",
            img: "assets/images/student3.jpg"
        },

        {
            name: "Савелий",
            review: "Отличный формат обучения, удобно и эффективно. Рекомендую!",
            img: "assets/images/student2.png"
        },

        {
            name: "Павел",
            review: "Верните деньги!",
            img: "assets/images/student1.jpg"
        }
    ];

    function createReview(name, review, imageSource) {
        let reviewContainer = document.createElement("div");
        reviewContainer.classList.add("review-item");

        let image = document.createElement("img");
        image.classList.add("review-avatar");
        image.alt = "photo";
        image.src = imageSource;

        let contentContainer = document.createElement("div");
        contentContainer.classList.add("review-content");

        let wrap = document.createElement("div");
        wrap.classList.add("review-wrap");

        let title = document.createElement("h2");
        title.classList.add("review-name");
        title.textContent = name; // Используем textContent вместо innerHTML

        let text = document.createElement("p");
        text.classList.add("review-text");
        text.textContent = review;

        contentContainer.appendChild(text);
        wrap.appendChild(image);
        wrap.appendChild(title);
        reviewContainer.appendChild(wrap);
        reviewContainer.appendChild(contentContainer);

        document.getElementById("reviews").appendChild(reviewContainer);
    }

    // Вызываем createReview для каждого отзыва
    reviews.forEach(function(review) {
        createReview(review.name, review.review, review.img);
    });
    
});

 function scrollCarousel(direction) {
        const container = document.getElementById('reviews');
        const items = container.getElementsByClassName('review-item');
        const itemWidth = items[0].clientWidth;
        const scrollAmount = itemWidth; // предполагаем, что ширина каждого элемента одинакова

        container.scrollLeft += scrollAmount * direction;
    }
