import styles from './field.module.scss'

const SearchField = (params) => {


  return (
    <div>
      <div>
        <input type='text' defaultValue={searchDocs.query} onChange={(e) => { searchDocs.search(e.target.value) }} className='w-75 my-4' />
        <button onClick={params.onClick}></button>
      </div>


      <div className={styles.filters}>
        
      </div>
    </div>
  )
}

export default SearchField