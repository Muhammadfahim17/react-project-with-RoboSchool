import React, { useState } from 'react'
import image1 from './assets/ROBO.SCHOOL.svg'
import image2 from './assets/Group 211.png'
import image3 from './assets/Group 312.png'
import image4 from './assets/Group 313.png'
import image5 from './assets/Frame 21806.png'
import image6 from './assets/unsplash_Zz5LQe-VSMY.png'
import image7 from './assets/unsplash_IF9TK5Uy-KI.png'
import image8 from './assets/unsplash_OhKElOkQ3RE.png'
import image9 from './assets/unsplash_rriAI0nhcbc.png'
import image10 from './assets/unsplash_Z_bTArFy6ks.png'
import image11 from './assets/Rectangle 1320.png'
import image12 from './assets/Arrow - Right Circle.svg'
import image13 from './assets/Arrow - Right Circle.svg'
import image14 from './assets/Facebook.svg'
import image15 from './assets/Instagram.svg'
import Icon, { PhoneOutlined, PhoneTwoTone } from '@ant-design/icons';
// import MessageSvg from 'path/to/message.svg'
import { Button,Modal } from "antd";


const App = () => {

  let [users,setUsers] = useState([
    {
      img : image6,
      name : 'Ирина Лайм',
      work : 'преподаватель по робототехнике',
      sayt1 : image14,
      sayt2 : image15,
      des : 'Сентябрь 1995 — Июнь 2000 Санкт-Петербургский политехнический университет Петра Великого Факультет: Компьютерных наук и технологий Специальность: Математика и компьютерные науки Форма обучения: Очная',
      id : 1,
      status : true
    },
    {
      img : image7,
      name : 'Марина Орлова',
      work : 'преподаватель по робототехнике',
      sayt1 : image14,
      sayt2 : image15,
      des : 'Сентябрь 1995 — Июнь 2000 Санкт-Петербургский политехнический университет Петра Великого Факультет: Компьютерных наук и технологий Специальность: Математика и компьютерные науки Форма обучения: Очная',
      id : 2,
      status : false
    },
    {
      img : image8,
      name : 'Максим Петров',
      work : 'преподаватель по робототехнике',
      sayt1 : image14,
      sayt2 : image15,
      des : 'Сентябрь 1995 — Июнь 2000 Санкт-Петербургский политехнический университет Петра Великого Факультет: Компьютерных наук и технологий Специальность: Математика и компьютерные науки Форма обучения: Очная',
      id : 3,
      status : true
    },
    {
      img : image9,
      name : 'Константин Назаров',
      work : 'преподаватель по робототехнике',
      sayt1 : image14,
      sayt2 : image15,
      des : 'Сентябрь 1995 — Июнь 2000 Санкт-Петербургский политехнический университет Петра Великого Факультет: Компьютерных наук и технологий Специальность: Математика и компьютерные науки Форма обучения: Очная',
      id : 4,
      status : false
    },
    {
      img : image10,
      name : 'Лиза Весенняя',
      work : 'преподаватель по робототехнике',
      sayt1 : image14,
      sayt2 : image15,
      des : 'Сентябрь 1995 — Июнь 2000 Санкт-Петербургский политехнический университет Петра Великого Факультет: Компьютерных наук и технологий Специальность: Математика и компьютерные науки Форма обучения: Очная',
      id : 5,
      status : true
    },
  ])

  function deleteUser(id) {
    users = users.filter((e) => e.id != id)
    setUsers(users)
  }

  let [search,setSearch] = useState('')
  let [status,setStatus] = useState('')

  function changeStatus(id) {
    users = users.map((e) => {
      if(e.id == id) {
        return {
          ...e,
          status : !e.status
        }
      }
      return e
    })
    setUsers(users)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  let [inpImage,setInpImage] = useState('')
  let [inpName,setInpName] = useState('')
  let [inpStatus,setInpStatus] = useState('true')

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function addNewUser() {
    let newUser = {
      img : inpImage,
      name : inpName,
      status : inpStatus == 'true' ? true : false,
      des : 'Сентябрь 1995 — Июнь 2000 Санкт-Петербургский политехнический университет Петра Великого Факультет: Компьютерных наук и технологий Специальность: Математика и компьютерные науки Форма обучения: Очная',
      id : Date.now(),
      work : 'преподаватель по робототехнике',
      sayt1 : image14,
      sayt : image15,
    }
    setUsers([...users,newUser])
    setIsModalOpen(false)
    inpImage('')
    inpName('')
    inpStatus('')
  }




  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
  let [allProducts,SetallProducts] = useState(null)

  const showModalInfo = (e) => {
    SetallProducts(e)
    setIsModalInfoOpen(true);
  };

  const handleOkInfo = () => {
    setIsModalInfoOpen(false);
  };

  const handleCancelInfo = () => {
    setIsModalInfoOpen(false);
  };



  let [editModal,setEditModal] = useState(false)
  let[editName,setEditName] = useState('')
  let[editImage,setEditImage] = useState('')
  let[editStatus,setEditStatus] = useState('')
  let [idx,setIdx] = useState(null)
  const showModalEdit = () => {
    setEditModal(true);
  };

  const handleOkEdit = () => {
    setEditModal(false);
  };

  const handleCancelEdit = () => {
    setEditModal(false);
  };

  function openModal(e) {
    showModalEdit()
    setEditName(e.name)
    setEditImage(e.img)
    setEditStatus(e.status)
    setIdx(e.id)
  }

  function editNewProducts(e) {
    users = users.map((e) => {
      if(e.id == idx) {
        return {
          ...e,
          name : editName,
          img : editImage,
          status : editStatus == 'true' ? true : false
        }
      }
      return e 
    })
    setUsers(users)
    handleCancelEdit()
  }

  return (

    <div>

<Modal
        title="INFO USER"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalInfoOpen}
        onOk={handleOkInfo}
        onCancel={handleCancelInfo}
      >
        <div>
          {allProducts && (
            <div>
              <div  className='flex sm:justify-around sm:items-center'>
              <img className='w-[40%]' src={allProducts.img} alt="" />
              <div className='flex flex-col items-center text-center gap-[15px]  '>
              <h1 className='text-[#141024] text-[25px] font-bold'>{allProducts.name}</h1>
              <p className='text-[#141024B2] text-[17px] font-[500] sm:w-[200px]'>{allProducts.work}</p>
              <div className='flex gap-[20px]'>
                <img src={allProducts.sayt1} alt="" />
                <img src={allProducts.sayt2} alt="" />
              </div>
              <p className='text-[17px] font-bold'>{allProducts.status ? 'Active' : 'Inactive'}</p>
              </div>
              </div>
              <h3 className='my-[20px] text-[16px] font-[500]'>{allProducts.des}</h3>
            </div>
          )}
        </div>
      </Modal>



      <Modal
        title="EDIT USER"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={editModal}
        onOk={() => editNewProducts()}
        onCancel={handleCancelEdit}
      >
        <div className='flex flex-col items-center gap-[15px] mt-[25px]'>
        <input  value={editImage} onChange={(e) => setEditImage(e.target.value)} className='border w-[80%] py-[10px] rounded-xl font-bold pl-[15px]' type="text" placeholder='Image...' />
        <input value={editName} onChange={(e) => setEditName(e.target.value)} className='border  w-[80%] py-[10px] rounded-xl font-bold pl-[15px]' type="text" placeholder='Name...' />
        <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)} className='border w-[25%] rounded-xl py-[7px] font-bold'>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        </div>
      </Modal>

        <div className='h-[80vh] bg-[#141024]'>
            <div className='flex w-[95%] justify-between p-[10px] sm:p-[20px] items-center '>
                <img className='w-[50%] sm:w-[10%] ' src={image1} alt="" />
                <div className='hidden text-[white] sm:flex sm:gap-[35px]'>
                    <p>О школе</p>
                    <p>Тренеры</p>
                    <p>Стоимость</p>
                </div>
                <h3 className='hidden text-[white] sm:block text-[20px] font-bold'>+7 800 000 11 22</h3>
                <img className='sm:hidden' src={image3} alt="" />
                <img className='sm:hidden' src={image4} alt="" />
            </div>

            <div className='w-[90%] m-auto items-center flex flex-col text-center mt-[20px] sm:flex-row sm:justify-around sm:text-start'>
              <div className='flex flex-col items-center gap-[10px] sm:items-start sm:gap-[25px]'>
                <h1 className='text-[white] text-[25px] font-bold sm:text-[50px]'>ROBO SCHOOL</h1>
                <p className='text-[#FFFFFF] sm:w-[400px]'>Курсы повышения квалификации по робототехнике для педагогов начальной школы</p>
              <button className='bg-[#D52027] text-[white] font-bold w-[65%] absolute top-[64%] h-[8vh] rounded-xl sm:static  sm:w-[45%] sm:h-[6vh]' type="primary">Записаться на курс</button>
              </div>
              <img className='w-[70%] sm:w-[30%]' src={image2} alt="" />
            </div>
        </div>

        <div className='mt-[80px] p-[15px] sm:w-[90%] m-auto mb-[100px]'>
          <div>
            <p className='text-[#141024] text-[17px] font-[500] w-[95%] sm:w-[470px]'><b>Robo School</b> – учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования</p>
          </div>
          <div className='flex flex-col items-center gap-[15px] mt-[25px] sm:flex-row sm:mt-[40px]'>
            <div className='w-[90%] flex flex-col items-center text-center sm:text-start sm:items-start'>
              <h1 className='text-[#D52027] text-[40px] font-bold sm:text-[50px]'>10</h1>
              <p className='text-[#141024B2] text-[17px] font-[500] sm:mt-[15px]'>УМК по различным направлениям по робототехнике</p>
            </div>
            <div className='w-[90%] flex flex-col items-center text-center sm:text-start sm:items-start'>
              <h1 className='text-[#D52027] text-[40px] font-bold sm:text-[50px]'>20</h1>
              <p className='text-[#141024B2] text-[17px] font-[500] sm:mt-[15px]'>Школ, в которых запущена робототехника</p>
            </div>
            <div className='w-[90%] flex flex-col items-center text-center sm:text-start sm:items-start'>
              <h1 className='text-[#D52027] text-[40px] font-bold sm:text-[50px]'>100</h1>
              <p className='text-[#141024B2] text-[17px] font-[500] sm:mt-[15px]'>Педагогов прошедших курсы повышения квалификации</p>
            </div>
            <div className='w-[90%] flex flex-col items-center text-center sm:text-start sm:items-start'>
              <h1 className='text-[#D52027] text-[40px] font-bold sm:text-[50px]'>10 000</h1>
              <p className='text-[#141024B2] text-[17px] font-[500] sm:mt-[15px]'>Обученных детей на базе собственных центров</p>
            </div>
          </div>
        </div>

        <div className='mt-[160px] p-[15px] sm:w-[90%] m-auto mb-[150px] '>
          <div>
            <h1 className='text-[#141024] text-[35px] font-bold text-center sm:text-start'>Что вы получите после курса</h1>
          </div>
          <div className='flex flex-col items-center gap-[15px] mt-[25px] sm:flex-row sm:mt-[80px]'>
            <div className='w-[90%] flex flex-col items-center text-center sm:text-start sm:items-start'>
              <h1 className='text-[#141024] text-[20px] font-bold sm:text-[25px]'>Удостоверение</h1>
              <p className='text-[#141024B2] text-[17px] mt-[10px] font-[500] sm:mt-[15px] sm:w-[360px]'>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</p>
            </div>
            <div className='w-[90%] flex flex-col items-center text-center sm:text-start sm:items-start'>
              <h1 className='text-[141024] text-[20px] font-bold sm:text-[25px]'>Знания</h1>
              <p className='text-[#141024B2] text-[17px] mt-[10px] font-[500] sm:mt-[15px] sm:w-[360px]'>По основам разработки учебно-методических комплексов
              по робототехнике и программированию</p>
            </div>
            <div className='w-[90%] flex flex-col items-center text-center sm:text-start sm:items-start'>
              <h1 className='text-[141024] text-[20px] font-bold sm:text-[25px]'>Практику</h1>
              <p className='text-[#141024B2] text-[17px] mt-[10px] font-[500] sm:mt-[15px] sm:w-[360px]'>Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)</p>
            </div>
          </div>
        </div>
        <img className='hidden sm:block absolute top-[165%] w-[15%] left-[74%]' src={image5} alt="" />


      <div className='my-[150px]'>

      <div className=' w-[90%] m-auto flex flex-col sm:flex-row'>
      <h1 className='w-[90%] m-auto text-[#141024] font-bold text-[30px] mb-[80px]' >Профессиональные тренеры</h1>  
      <div className=' flex gap-[20px] flex-col items-center sm:flex-row sm:items-start sm:gap-[120px]'>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...' className='border h-[6vh] rounded-xl px-[45px] pl-[15px] font-bold'  type="text" />
        <select value={status} onChange={(e) => setStatus(e.target.value)} className='border h-[6vh] px-[45px] rounded-xl font-bold'>
          <option value="" key="">All</option>
          <option value="true" key="">Active</option>
          <option value="false" key="">Inactive</option>
        </select>
        <button onClick={() => showModal()} className='border px-[45px] py-[8px] font-bold cursor-pointer bg-[blue] text-[white] h-[6vh] flex rounded-xl'> Add </button>
      </div>
      </div>

      <div className='w-[90%] m-auto gap-[40px] flex items-center overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide py-4'>
        
        {users.filter((e) => e.status.toString().includes(status)).filter((e) => e.name.toLowerCase().includes(search.toLowerCase())).map((e) => {
          return (
            <div key={e.id} className='w-[500px] flex flex-col items-start gap-[15px] '>
              <img className='w-[100%] h-[60vh]' src={e.img} alt="" />
              <h1 className='text-[#141024] text-[20px] font-bold'>{e.name}</h1>
              <p className='font-bold'>{e.status ? 'Active' : 'Inactive'}</p>
              <p className='text-[#141024B2] w-[300px]'>{e.work}</p>
              <div className='flex items-center gap-[25px]'>
                <button onClick={() => showModalInfo(e)} className='cursor-pointer hover:text-[green]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg></button>
                <button className='cursor-pointer hover:text-[blue]]' onClick={() => openModal(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg></button>
                <button onClick={() => deleteUser(e.id)} className='cursor-pointer hover:text-[red]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
                <input onChange={() => changeStatus(e.id)} checked={e.status} className='cursor-pointer' type="checkbox" name="" id="" />
              </div>
            </div>
          )
        })}
      </div>
      </div>



        <div className='w-[90%] m-auto mb-[180px]'>
        <h1 className='text-[#141024] text-[35px] font-bold text-center sm:text-start'>Выберите нужный пакет</h1>
        <div className='mt-[80px] flex flex-col items-center gap-[35px] sm:flex-row'>
          <div className='w-[95%] m-auto bg-[#141024] text-[white] rounded-xl p-[10px] flex flex-col items-center gap-[20px] text-center h-[55vh] justify-around'>
            <h1 className='text-[35px] font-bold'>– PRO –</h1>
            <h1  className='text-[35px] font-bold'>20.000 ₽</h1>
            <p className='text-[17px] font-bold'>УМК по робототетхнике и программированию</p>
            <button className='bg-[#D52027] text-[white] font-bold w-[65%] h-[7vh]  rounded-xl sm:static  sm:w-[45%] sm:h-[7vh]' type="primary">Оставить заявку</button>
          </div>
          <div className='w-[95%] m-auto bg-[#FFFFFF] text-[#141024] rounded-xl p-[10px] flex flex-col items-center gap-[20px] text-center h-[55vh] justify-around border-1'>
            <h1 className='text-[35px] font-bold'>– ROBO –</h1>
            <h1  className='text-[35px] font-bold'>15.000 ₽</h1>
            <p className='text-[17px] font-bold'>УМК по робототетхнике </p>
            <button className='bg-[#D52027] text-[white] font-bold w-[65%] h-[7vh]  rounded-xl sm:static  sm:w-[45%] sm:h-[7vh]' type="primary">Оставить заявку</button>
          </div>
          <div className='w-[95%] m-auto bg-[FFFFFF] text-[#141024] rounded-xl p-[10px] border-1 flex flex-col items-center gap-[20px] text-center h-[55vh] justify-around'>
            <h1 className='font-bold'>– PROG –</h1>
            <h1  className='text-[35px] font-bold'>10.000 ₽</h1>
            <p className='text-[17px] font-bold'>УМК по программированию</p>
            <button className='bg-[#D52027] text-[white] font-bold w-[65%] h-[7vh]  rounded-xl sm:static  sm:w-[45%] sm:h-[7vh]' type="primary">Оставить заявку</button>
          </div>
        </div>
        </div>

        <div className='bg-[#D52027] h-[68vh] py-[40px] sm:h-[60vh]'>
          <div className='flex flex-col items-center text-center sm:flex-row sm:justify-around sm:text-start '>
            <div className='flex flex-col items-center gap-[25px] sm:text-start sm:items-start'>
              <h1 className='text-[30px] font-bold text-[white] sm:text-[35px] sm:w-[350px]'>Запишитесь на курс со скидкой 10%</h1>
              <p className='text-[white] text-[17px] font-[500]'>Акция действительна до 10 марта 2022 года</p>
            </div>
            <div className='flex flex-col items-center gap-[20px] mt-[30px] '>
              <input placeholder='Имя' className='border bg-[#F6F6F6] w-[150%] h-[7vh] rounded-xl pl-[5px] font-bold sm:w-[200%]' type="text" />
              <input placeholder='Телефон' className='border bg-[#F6F6F6] w-[150%] h-[7vh] rounded-xl pl-[5px] font-bold sm:w-[200%]  '  type="text" />
              <input placeholder='E-mail' className='border bg-[#F6F6F6] w-[150%] h-[7vh] rounded-xl pl-[5px] font-bold sm:w-[200%]'  type="text" />
              <button className='bg-[#141024] text-[white] font-bold w-[90%] h-[7vh]  rounded-xl sm:static  sm:w-[200%] sm:h-[7vh]' type="primary">Оставить заявку</button>
            </div>
          </div>
        </div>

        <div className='bg-[#141024] h-[20vh] py-[30px] flex flex-col items-center text-center gap-[10px] sm:flex-row sm:justify-between sm:px-[150px]'>
          <div className='flex flex-col gap-[15px] sm:items-start'>
            <img src={image1} alt="" />
            <p className='text-[18px] font-bold text-[gray]'>© ROBO.SCHOOL</p>
          </div>
          <h3 className='text-[white] sm:block text-[20px] font-bold'>+7 800 000 11 22</h3>
        </div>

        <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={() => addNewUser()}
        onCancel={handleCancel}
      >
        <div className='flex flex-col items-center gap-[15px] mt-[25px]'>
        <input  value={inpImage} onChange={(e) => setInpImage(e.target.value)} className='border w-[80%] py-[10px] rounded-xl font-bold pl-[15px]' type="text" placeholder='Image...' />
        <input value={inpName} onChange={(e) => setInpName(e.target.value)} className='border  w-[80%] py-[10px] rounded-xl font-bold pl-[15px]' type="text" placeholder='Name...' />
        <select value={inpStatus} onChange={(e) => setInpStatus(e.target.value)} className='border w-[25%] rounded-xl py-[7px] font-bold'>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        </div>
      </Modal>

    </div>
  )
}

export default App