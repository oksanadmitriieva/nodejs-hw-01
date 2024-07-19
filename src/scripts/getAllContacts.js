// Импортируем модуль fs с поддержкой промисов из встроенной библиотеки Node.js
import fs from 'fs/promises';
// Импортируем константу PATH_DB, которая содержит путь к файлу базы данных контактов
import { PATH_DB } from '../constants/contacts.js';

// Определяем асинхронную функцию getAllContacts для получения всех контактов
export const getAllContacts = async () => {
  try {
    // Читаем данные из файла базы данных контактов
    const data = await fs.readFile(PATH_DB, 'utf-8');
    // Парсим данные из JSON-формата в объект
    const contacts = JSON.parse(data);

    // Возвращаем массив контактов
    return contacts;
  } catch (error) {
    // Обрабатываем ошибки, возникающие при чтении контактов, и выводим сообщение об ошибке
    console.error('Error reading contacts:', error);
    // Возвращаем пустой массив в случае ошибки
    return [];
  }
};

// Вызываем функцию getAllContacts и выводим результат в консоль
console.log(await getAllContacts());
