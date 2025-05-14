import './Designer.css'
import DropDownDesigner from '../../components/DropDownDesigner/DropDownDesigner';
const Designer = () => {
     const countriesOptions = ['Syria','Saudi','Palestine'];
     const creativeOptions = ['Syria','Saudi','Palestine'];
  return (
    <div  className='designers container'>
        <div className='designer-header'> 
            <h1>Designer</h1>
            <div className='search-filter-designer'>
                <div className='search-designer'>
                    <input placeholder='Search Designer ...' type='text'/> 
                    <img src='/assets/Images/search.png'/>
                </div>
                <div className='filter-designer'> 
               <DropDownDesigner options={countriesOptions} placeholder="Countries"/>
               <DropDownDesigner options={creativeOptions} placeholder="Creative"/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Designer
