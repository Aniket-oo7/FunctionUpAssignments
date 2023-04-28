
import { Fragment } from 'react';
import './App.css';
// import { Profile } from './Component/profilecard';
import { Profile } from './profilecard';
function App(props) {

  function register(input) {
    alert('Steve Roggers')
  }

  function login() {
    alert('Logan')
  }



  return (

    <Fragment>
      <div className='div1'>
      <Profile
        name='Jack Winbow'
        designation='Ui/UX Designer'
        jobDiscription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet odio ut enim auctor, at aliquam dolor vestibulum. Suspendisse potenti. Cras consectetur aliquet neque fringilla lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet erat ac ligula aliquet elementum.'
        image='https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600' 
        />
      <Profile
        name='Lilly Fernandez'
        designation='Software enginer'
        jobDiscription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet odio ut enim auctor, at aliquam dolor vestibulum. Suspendisse potenti. Cras consectetur aliquet neque fringilla lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet erat ac ligula aliquet elementum.'
        image='https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        onClickFunction={register}
      />
      <Profile 
       name='Logan'
        designation='Software Developer'
        jobDiscription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet odio ut enim auctor, at aliquam dolor vestibulum. Suspendisse potenti. Cras consectetur aliquet neque fringilla lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet erat ac ligula aliquet elementum.'
        image='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600' 
        onClickFunction={login} />
</div>
</Fragment>

  );
}

export default App;
