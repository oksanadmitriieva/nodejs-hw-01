// Импортируем модуль fs с поддержкой промисов из встроенной библиотеки Node.js
import fs from 'fs/promises';
// Импортируем константу PATH_DB, которая содержит путь к файлу базы данных контактов
import { PATH_DB } from '../constants/contacts.js';

// Определяем асинхронную функцию thanos для удаления случайных контактов с вероятностью 50%
export const thanos = async () => {
  try {
    // Читаем данные из файла базы данных контактов
    const data = await fs.readFile(PATH_DB, 'utf-8');
    // Парсим данные из JSON-формата в объект
    const contacts = JSON.parse(data);

    // Отбираем контакты с вероятностью 50% для удаления
    const updatedContacts = contacts.filter(() => Math.random() >= 0.5);

    // Записываем обновлённый массив контактов обратно в файл базы данных
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf-8',
    );
    // Выводим сообщение об успешном выполнении операции
    console.log('Successfully.');
  } catch (error) {
    // Обрабатываем ошибки, возникающие при обработке контактов, и выводим сообщение об ошибке
    console.error('Error processing contacts with Thanos:', error);
  }
};

// Вызываем функцию thanos и ждём её выполнения
await thanos();
