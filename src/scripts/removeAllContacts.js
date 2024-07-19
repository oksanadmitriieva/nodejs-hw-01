// Импортируем модуль fs с поддержкой промисов из встроенной библиотеки Node.js
import fs from 'fs/promises';
// Импортируем константу PATH_DB, которая содержит путь к файлу базы данных контактов
import { PATH_DB } from '../constants/contacts.js';

// Определяем асинхронную функцию removeAllContacts для удаления всех контактов
export const removeAllContacts = async () => {
  try {
    // Записываем пустой массив в файл базы данных, удаляя все контакты
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
    // Выводим сообщение об успешном удалении всех контактов
    console.log('Successfully removed all contacts.');
  } catch (error) {
    // Обрабатываем ошибки, возникающие при удалении контактов, и выводим сообщение об ошибке
    console.error('Error removing contacts:', error);
  }
};

// Вызываем функцию removeAllContacts и ждём её выполнения
await removeAllContacts();
