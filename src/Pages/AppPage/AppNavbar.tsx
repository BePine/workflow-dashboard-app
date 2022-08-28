const AppNavbar = () => {
	return (
		<div className='appNav'>
			<button>
				<input type='checkbox' radioGroup='nav' />
				<img src={require('../../Assets/Images/icons8-home-50.png')} alt='' />
			</button>
			<button>
				<input type='checkbox' radioGroup='nav' />
				<img src={require('../../Assets/Images/icons8-book-50.png')} alt='' />
			</button>
			<button>
				<input type='checkbox' radioGroup='nav' />
				<img
					src={require('../../Assets/Images/icons8-book-mark-50.png')}
					alt=''
				/>
			</button>
			<button>
				<input type='checkbox' radioGroup='nav' />
				<img
					src={require('../../Assets/Images/icons8-settings-50.png')}
					alt=''
				/>
			</button>
		</div>
	);
};
export default AppNavbar;
