"use client"

import MenuAccordion from "@/components/MenuAccordion/MenuAccordion";

export default function QA() {
  return (
    <MenuAccordion>
      <MenuAccordion.Item title="Вопросы-ответы" />
      <MenuAccordion.Item title="Что такое Билетопоиск?" content="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."/>
      <MenuAccordion.Item title="Какой компании принадлежит Билетопоиск?" content="Билетопоиск принадлежит компании Яндекс."/>
      <MenuAccordion.Item title="Как купить билет на Билетопоиск?" content="Перейдите на главную страницу и выберите желаемые билеты, затем перейдите в корзину, чтобы увидеть выбранные билеты." />
      <MenuAccordion.Item title="Как оставить отзыв на Билетопоиск?" content="Пока что такой возможности нет, но очень скоро она появится!" />
    </MenuAccordion>
  )
}