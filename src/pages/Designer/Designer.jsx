import './Designer.css'
import DropDownDesigner from '../../components/DropDownDesigner/DropDownDesigner';
import DesignerCard from '../../components/DesignerCard/DesignerCard';
const Designer = () => {
     const countriesOptions = ['Syria','Saudi','Palestine'];
     const creativeOptions = ['Syria','Saudi','Palestine'];
      const designers=[
        {
            image:"/assets/Images/designer-image.png",
            designerName:"Arch.Layla abdulHadi",
            designerCity:"Syria",
            designerPhone:"+123 123 123 1234",
        id:1,
            designerWork:[
                "/assets/Images/3d-models-2.png",
                "/assets/Images/3d-models.png",
                "/assets/Images/3d-scenes.jpg",
                "/assets/Images/3d-scenes1.jpg",
                "/assets/Images/3d-scenes2.jpg",
                "/assets/Images/Img2.png",
                "/assets/Images/Img4.png",
                "/assets/Images/Img3.png",
                "/assets/Images/Img3.png",
                "/assets/Images/Img3.png",
                "/assets/Images/Img3.png",
                "/assets/Images/Img3.png",
                "/assets/Images/Img3.png",
                "/assets/Images/Img3.png",
                "/assets/Images/Img3.png",
            ]
        },{
            image:"/assets/Images/designer-image.png",
            designerName:"John",
            designerCity:"Syria",
            designerPhone:"+123 123 123 1234",
                   id:2,
            designerWork:[
                "/assets/Images/3d-models-2.png",
                "/assets/Images/3d-models.png",
                "/assets/Images/3d-scenes.jpg",
                "/assets/Images/3d-scenes1.jpg",
                "/assets/Images/3d-scenes2.jpg",
                "/assets/Images/Img2.png",
                "/assets/Images/Img4.png",
                "/assets/Images/Img3.png"
            ]
        },{
            image:"/assets/Images/designer-image.png",
            designerName:"John",
            designerCity:"Syria",
            designerPhone:"+123 123 123 1234",
                   id:3,
            designerWork:[
                "/assets/Images/3d-models-2.png",
                "/assets/Images/3d-models.png",
                "/assets/Images/3d-scenes.jpg",
                "/assets/Images/3d-scenes1.jpg",
                "/assets/Images/3d-scenes2.jpg",
                "/assets/Images/Img2.png",
                "/assets/Images/Img4.png",
                "/assets/Images/Img3.png"
            ]
        },{
            image:"/assets/Images/designer-image.png",
            designerName:"John",
            designerCity:"Syria",
            designerPhone:"+123 123 123 1234",
                   id:4,
            designerWork:[
                "/assets/Images/3d-models-2.png",
                "/assets/Images/3d-models.png",
                "/assets/Images/3d-scenes.jpg",
                "/assets/Images/3d-scenes1.jpg",
                "/assets/Images/3d-scenes2.jpg",
                "/assets/Images/Img2.png",
                "/assets/Images/Img4.png",
                "/assets/Images/Img3.png"
            ]
        },{
            image:"/assets/Images/designer-image.png",
            designerName:"John",
            designerCity:"Syria",
            designerPhone:"+123 123 123 1234",
                   id:5,
            designerWork:[
                "/assets/Images/3d-models-2.png",
                "/assets/Images/3d-models.png",
                "/assets/Images/3d-scenes.jpg",
                "/assets/Images/3d-scenes1.jpg",
                "/assets/Images/3d-scenes2.jpg",
                "/assets/Images/Img2.png",
                "/assets/Images/Img4.png",
                "/assets/Images/Img3.png"
            ]
        },

    ]
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
           {designers.map((designer) => (
            <DesignerCard
              
              key={designer.id}
              designerName={designer.designerName}
              designerImage={designer.image}
              designerLocation={designer.designerCity}
              designerNumber={designer.designerPhone}
              designerWork={designer.designerWork}
            />
          ))}
   
    </div>
  )
}

export default Designer
