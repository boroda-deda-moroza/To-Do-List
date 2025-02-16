"use strict";
// Добавляем обработчик события "click" на кнопку с id "addTaskButton"
document.getElementById("addTaskButton").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText) {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Создаем кнопку для удаления задачи
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.className = "delete-button";
    // Добавляем обработчик события "click" для удаления задачи
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    // Добавляем кнопку удаления в элемент списка li
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = ""; // Очистить поле ввода
  }
});

