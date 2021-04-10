function Pagination({countPage,paginate,activePage,currentPage,pageNext,pagePrev}){
    var pageNumber = [];
    
    for(var i = 1;i<=countPage;i++){
        pageNumber.push(i);
    }

    return(
        <div className="pagination">
                  <div className="pagination-prev" onClick={pagePrev}>
                    <i className="fa fa-angle-left" />
                  </div>
                  
                  {
                      pageNumber.map((value,i)=>{
                          
                          return (<div className={`page ${activePage==value?"page-active":""} `} onClick = {()=>paginate(value)}>
                          {value}
                        </div>);
                      })
                  }
                  <div className="pagination-next"  onClick={pageNext}>
                    <i className="fa fa-angle-right" />
                  </div>
                </div>
    );
}

export default Pagination;