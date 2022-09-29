import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MyFooter = () => {
	return (
		<Footer>
			<InnerFooter>
				<ul className='first_block'>
					<li>
						©ООО "Практик-Д" <br />
						г. Тольятти, улица Офицерская, 35
					</li>
					<li>
						<Link to=''>
							<img
								src='https://img.icons8.com/color/38/000000/vk-com.png'
								alt='Vk'
							/>
							PRAKTIK "Вконтакте"
						</Link>
					</li>
					<li>
						<Link to=''>
							<img
								src='https://img.icons8.com/fluency/38/000000/instagram-new.png'
								alt='instagram'
							/>
							PRAKTIK "Instagram"
						</Link>
					</li>
				</ul>
				<ul className='second_block'>
					<li>
						<Link to=''>Услуги стоматолога</Link>
					</li>
					<li>
						<Link to=''>Лечение зубов</Link>
					</li>
					<li>
						<Link to=''>Удаление зубов</Link>
					</li>
					<li>
						<Link to=''>Протезирование зубов</Link>
					</li>
				</ul>
				<ul className='ther_block'>
					<li>
						<Link to=''>Ортодонтия</Link>
					</li>
					<li className='nowrap'>
						<Link to=''>Отбеливание зубов</Link>
					</li>
					<li>
						<Link to=''>Имплантация зубов</Link>
					</li>
					<li>
						<Link to=''>Детская стоматология</Link>
					</li>
				</ul>
				<ul className='four_block'>
					<li>
						<Link to=''>Политика конфиденциальности</Link>
					</li>
					<li>
						<Link to=''>Карта сайта</Link>
					</li>
					<li>
						<Link to=''>Разработка сайта</Link>
					</li>
					<li>
						<Link className='guild' to=''>
							Tehnopolyus
						</Link>
					</li>
				</ul>
			</InnerFooter>
		</Footer>
	)
}

const Footer = styled.footer`
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: #f3f6f8;
`
const InnerFooter = styled.div`
	width: 95%;
	max-width: 1440px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	ul {
		list-style: none;
		a {
			font-weight: 400;
			font-size: 16px;
			line-height: 23px;
			color: #5e5e5e;
			text-decoration: none;
			:hover {
				color: black;
			}
		}
	}
	.first_block {
		a {
			display: flex;
			align-items: center;
			text-decoration: none;
			margin: 5px 0;
		}
	}
	.second_block,
	.ther_block,
	.four_block {
		li {
			margin: 5px 0;
		}
	}
`

export default MyFooter
