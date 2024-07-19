// Импортируем модуль fs с поддержкой промисов из встроенной библиотеки Node.js
import fs from 'fs/promises';
// Импортируем константу PATH_DB, которая содержит путь к файлу базы данных контактов
import { PATH_DB } from '../constants/contacts.js';

// Определяем асинхронную функцию countContacts для подсчёта количества контактов
export const countContacts = async () => {
  try {
    // Читаем данные из файла базы данных контактов
    const data = await fs.readFile(PATH_DB, 'utf-8');
    // Парсим данные из JSON-формата в объект
    const contacts = JSON.parse(data);

    // Возвращаем количество контактов в массиве
    return contacts.length;
  } catch (error) {
    // Обрабатываем ошибки, возникающие при подсчёте контактов, и выводим сообщение об ошибке
    console.error('Error counting contacts:', error);
    // Возвращаем 0 в случае ошибки
    return 0;
  }
};

// Вызываем функцию countContacts и выводим результат в консоль
console.log(await countContacts());
