document.addEventListener('DOMContentLoaded', function() {
    const subjects = document.querySelectorAll('#subject-list .list-group-item');
    const recommendButton = document.getElementById('recommend-button');
    const recommendedSubjectDisplay = document.getElementById('recommended-subject');
    const resultSection = document.getElementById('result');

    recommendButton.addEventListener('click', function() {
        // 무작위로 과목을 추천합니다.
        const randomIndex = Math.floor(Math.random() * subjects.length);
        const recommendedSubject = subjects[randomIndex].textContent;

        // 추천된 과목을 화면에 표시합니다.
        recommendedSubjectDisplay.textContent = `추천 과목: ${recommendedSubject}`;

        // 결과 섹션을 표시합니다.
        resultSection.style.display = 'block';
    });
});
