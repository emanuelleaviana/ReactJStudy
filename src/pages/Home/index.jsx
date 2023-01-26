import React, { useState } from 'react';
import './styles.css';
import { Card } from '../../components/Card/';

export function Home() {

  const [studentName, setStudentName] = useState();

  return (
    <div className='container'>
      <h1>Lista de presença! {studentName}</h1>
      <input 
      type="text" 
      placeholder='Digite o nome...'
      onChange={e => setStudentName(e.target.value)} />
      <button type='button'>Adicionar</button>

      <Card name="Emanuelle"  time="10:55:25"/>
      <Card name="Maria"  time="10:56:54"/>
      <Card name="Carlos"  time="11:32:44"/>
    </div>
  )
}

