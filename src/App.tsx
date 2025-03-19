import React from 'react';
import {Item} from './components/Item/Item';
import { Button } from './components/Button/Button';
import './App.css';

export const App: React.FC = () => {
	const data: { title: string; text: string; date: Date }[] = [
		{
			title : "Убедитесь, что TypeScript установлен",
			text : "npm install typescript @types/react @types/react-dom --save-dev",
			date : new Date()
		},
		{
			title : "Добавьте файл tsconfig.json",
			text : "Если его ещё нет, создайте файл tsconfig.json в корне проекта.",
			date : new Date()
		},
		{
			title : "Подключите алиасы в vite.config.ts",
			text : "Ваш текущий код уже поддерживает TypeScript. Вот готовый файл vite.config.ts:",
			date : new Date()
		}
	]
  return (
    <div className="app-container">
		<Button/>
		<div>
			{data.map((item,index) =>(
				<Item key = {index}	data = {item}/>
			))}
		</div>
    </div>
  );
};

