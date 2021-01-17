import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Mess Commitee</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i.ibb.co/YDpXB6k/opt-aboutcom-coeus-resources-content-migration-mnn-images-2018-12-Dislike-Cooking-Trend-42651ffd1865.jpg'
              text='Ram Upadhyay'
              text1='Email: abc@iiita.ac.in'
              label='Head'
              path='/'
            />
            <CardItem
               src='https://i.ibb.co/YDpXB6k/opt-aboutcom-coeus-resources-content-migration-mnn-images-2018-12-Dislike-Cooking-Trend-42651ffd1865.jpg'
              text='Shyam Verma'
              text1='Email: abc@iiita.ac.in'
              label='Cook'
              path='/'
            />
             <CardItem
              src='https://i.ibb.co/YDpXB6k/opt-aboutcom-coeus-resources-content-migration-mnn-images-2018-12-Dislike-Cooking-Trend-42651ffd1865.jpg'
              text='Shubh Prakash'
              text1='Email: abc@iiita.ac.in'
              label='Cook'
              path='/'
            />
             <CardItem
              src='https://i.ibb.co/YDpXB6k/opt-aboutcom-coeus-resources-content-migration-mnn-images-2018-12-Dislike-Cooking-Trend-42651ffd1865.jpg'
              text='Gagan Baranwal'
              text1='Email: abc@iiita.ac.in'
              label='Cook'
              path='/'
            />
             <CardItem
              src='https://i.ibb.co/YDpXB6k/opt-aboutcom-coeus-resources-content-migration-mnn-images-2018-12-Dislike-Cooking-Trend-42651ffd1865.jpg'
              text='Ayush Shukla'
              text1='Email: abc@iiita.ac.in'
              label='Cook'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
