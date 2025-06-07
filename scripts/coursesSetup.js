document.addEventListener('DOMContentLoaded', function() {// Массив курсов
    var coursesArray = [
        {
            url: 'https://www.youtube.com/playlist?list=PL-18izvyDXIcZAMoBGm4GxhBEAL4Xzc82',
            imagS: 'assets/images/course1.jpg',
            courseName: 'Введение в астрофизику',
            courseDescr: 'Курс лекций для 3-го курса студентов физфака'
        },
        {
            url: 'https://www.youtube.com/playlist?list=PL-18izvyDXIc7kzGBawCvhRm0MsDJIuuC',
            imagS: 'assets/images/course2.jpg',
            courseName: 'Эволюция и Формирование экзопланет',
            courseDescr: 'Спецкурс лекций для 6-го курса студентов астрономического отделения'
        },
        {
            url: 'https://www.youtube.com/playlist?list=PL-18izvyDXIc7kzGBawCvhRm0MsDJIuuC',
            imagS: 'assets/images/course3.jpg',
            courseName: 'Эволюция формирования экзопланет',
            courseDescr: 'Спецкурс лекций для 6-го курса студентов астрономического отделения'
        },
        {
            url: 'https://www.youtube.com/playlist?list=PL-18izvyDXIc7kzGBawCvhRm0MsDJIuuC',
            imagS: 'assets/images/course1.jpg',
            courseName: 'Формирование эволюции экзопланет',
            courseDescr: 'Спецкурс лекций для 6-го курса студентов астрономического отделения'
        },
        {
            url: 'https://www.youtube.com/playlist?list=PL-18izvyDXIc7kzGBawCvhRm0MsDJIuuC',
            imagS: 'assets/images/course2.jpg',
            courseName: 'Формирование формирования экзопланет',
            courseDescr: 'Спецкурс лекций для 6-го курса студентов астрономического отделения'
        },
        {
            url: 'https://www.youtube.com/playlist?list=PL-18izvyDXIc7kzGBawCvhRm0MsDJIuuC',
            imagS: 'assets/images/course3.jpg',
            courseName: 'Эволюция эволюции экзопланет',
            courseDescr: 'Спецкурс лекций для 6-го курса студентов астрономического отделения'
        },
        
        // Добавьте дополнительные курсы здесь
    ];

// Функция для добавления курса на страницу
    function addCourseToPage(course) {
        var coursesContainer = document.getElementById('courses');
        var courseElement = document.createElement('div');
        courseElement.className = 'all-courses-container__item';

        var linkElement = document.createElement('a');
        linkElement.className = 'course-link';
        linkElement.href = course.url;
        linkElement.target = '_blank';

        var imgElement = document.createElement('img');
        imgElement.src = course.imagS;

        var nameElement = document.createElement('p');
        nameElement.className = 'course-name';
        var nameSpan = document.createElement('span');
        nameSpan.textContent = course.courseName;
        nameElement.appendChild(nameSpan);

        var descrElement = document.createElement('p');
        descrElement.className = 'course-description';
        descrElement.textContent = course.courseDescr;

        linkElement.appendChild(imgElement);
        linkElement.appendChild(nameElement);
        linkElement.appendChild(descrElement);
        courseElement.appendChild(linkElement);

        coursesContainer.appendChild(courseElement);
    }

// Добавление всех курсов на страницу
    coursesArray.forEach(addCourseToPage);
});