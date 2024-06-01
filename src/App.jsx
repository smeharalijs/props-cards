import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App(){

  return(
    <d>
      <Navbar/>
      <Cards title="Technology"  description="A tool that sets up a new React project with a sensible default configuration." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26MP9f5YdlTfN-2pikGFAXSyfPfT7l-wdhA&s" price="2000"/>
      <Cards title="Technology 1"  description=" A utility-first CSS framework for rapid UI development" image="https://media.istockphoto.com/id/813581282/photo/face-detection-and-recognition-of-man-computer-vision-and-machine-learning-concept.jpg?s=612x612&w=0&k=20&c=NoRoSp7n38vNPduP3KtvWWjwd0H7QMXQcT0hCSbVvwo=" price="70000"/>
      <Cards title="Technology 2"  description="Simplifies the setup process for new React applications." image="https://cdn.pixabay.com/photo/2020/06/09/20/15/spying-5279884_1280.jpg" price="8000"/>
      <Cards title="Technology 3"  description="Provides utility classes for styling, enabling fast and consistent design implementation." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-ISYSCPSXEOsO2QvNgclmO9OSEYXMSkUqgP9I1omESsClLW416hIHH_6JUujsoaqh9M&usqp=CAU" price="90000"/>
  

    </d>
  )

}
export default App;