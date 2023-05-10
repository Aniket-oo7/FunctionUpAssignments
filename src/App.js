import logo from './logo.svg';
import './App.css';
import FetchData from './atom/list';
import Scrollbar from './components/organisms/scrollbar';
import styles from './App.module.css'

function App() {
  const userData = [
    {
      img:'https://images.pexels.com/photos/12446422/pexels-photo-12446422.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      name:'Shriram Rathi',
      post:'Graphic Designer',
      exp:'7yr exp'
     },
  {
    img:'https://images.pexels.com/photos/16578960/pexels-photo-16578960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name:'Athiya Rana',
    post:'UI designer',
    exp : '3yr exp'
  },
{
    img:'https://images.pexels.com/photos/15092608/pexels-photo-15092608.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name:'Ayush Kapoor',
    post:'Backend Developer',
    exp :'9yr exp'
  },
{
  img:'https://images.pexels.com/photos/11202223/pexels-photo-11202223.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  name:'Dey Roy',
  post:'Full Stack Engineer',
  exp:'11yr exp'
 },
{
  img:'https://images.pexels.com/photos/11202329/pexels-photo-11202329.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  name:'Ayesha Khan',
  post:'AI specialist',
  exp:'6yr exp'
 },
{
  img:'https://images.pexels.com/photos/15824229/pexels-photo-15824229.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  name:'Shefali Smith',
  post:'Frontend Devloper',
  exp:'9yr exp'
}
  ]
return (

    <div className={styles.App}>
    <div className={styles.firstChild}>
    <h3> Know Your Mentors</h3>
    <p>Here are some of the top educators from the Indian IT Industry to upskill you in every aspects towards your placements.</p>
    </div>
 <div className={styles.wrapper}>

      {
       userData.map(ele=>(
      <div> <Scrollbar data ={ele}/></div>
           ))
      }
        </div>
  </div>
)
}