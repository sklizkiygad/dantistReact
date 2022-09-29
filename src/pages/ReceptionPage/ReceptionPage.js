import React from 'react'
import MyHeader from '../../components/MyHeader/MyHeader'
import SectionNavbar from '../../components/SectionNavbar/SectionNavbar'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import MyFooter from '../../components/MyFooter/MyFooter'
import DoctorsList from '../../components/DoctorsList/DoctorsList'

const ReceptionPage = () => {
	return (
		<div>
			<MyHeader headText={'Личный кабинет'} />

			<section className='personal-cabinet'>
				<div className='personal-cabinet__main-block reception'>
					<SectionNavbar />
					<DoctorsList />
				</div>

				<ProfileCard />
			</section>
			<MyFooter />
		</div>
	)
}

export default ReceptionPage
