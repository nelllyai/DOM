'use strict';

document.querySelector('.ads').remove();

const list = document.body.querySelector('ol');
const firstItem = list.querySelector('.item_one');
const secondItem = list.querySelector('.item_two');
const thirdItem = list.querySelector('.item_three');
const fourthItem = list.querySelector('.item_four');
const fifthItem = list.querySelector('.item_five');
const sixthItem = list.querySelector('.item_six');

list.prepend(firstItem);
firstItem.after(secondItem);

sixthItem.querySelector('img').after(secondItem.querySelector('h2'));

secondItem.querySelector('img').after(fifthItem.querySelector('h2'));
secondItem.querySelector('ol').
    append(sixthItem.querySelectorAll('li')[8],
        sixthItem.querySelectorAll('li')[9]);

fourthItem.querySelectorAll('li')[2].
    append(secondItem.querySelector('.props__item_four'));

thirdItem.after(fourthItem);

fifthItem.querySelector('img').after(sixthItem.querySelector('h2 ~ h2'));
fifthItem.querySelector('h2').after(thirdItem.querySelector('ol'));

thirdItem.querySelector('h2').after(fifthItem.querySelector('ol ~ ol'));
