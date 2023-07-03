import { Autocomplete, TextField } from "@mui/material";

function MovieForm({movieMap, handleChange, handleSubmit}) {
    return (
<form onSubmit={handleSubmit} style={{ display: "flex" }}>
<div style={{ flex: 1 }}>      
<Autocomplete disablePortal id="combo-box-demo" options={movieMap} onChange={handleChange}
sx={{ backgroundColor: "white", width: 200, margin: '0 auto', marginLeft: '580px' }}
renderInput={(params) => <TextField {...params} label="Movies" />}
/> 
</div>
        <button className="add" type="submit">
          Add to Wishlist
        </button>
      </form>
      
    )
}

export default MovieForm