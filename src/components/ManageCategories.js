import axios from "axios";
import CategoryList from "./CategoryList";
import React, {useState} from "react";

export default function ManageCategories({url}) {
    const [newCategory, setNewCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [addingCategory, setAddingCategory] = useState(false);

    function saveCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({name: newCategory});
        axios.post(url + 'products/addcategory.php', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setNewCategory('');
            setAddingCategory(false);
            setSelectedCategory(response.data);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        });
    }

    if (!addingCategory) {
        return (
            <>
            <h3>Hallinnoi tuoteryhmiä</h3>
            <div>
                <label>Tuoteryhmä</label>
                <CategoryList
                url={url}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                />
                <button className="btn btn-dark" type="button" onClick={() => setAddingCategory(true)}>Lisää</button>
            </div>
            </>
        )
    } else {
        return (
            <>
            <h3>Lisää uusi tuoteryhmä</h3>
            <form onSubmit={saveCategory}>
                <div>
                    <label>Tuoteryhmän nimi</label>
                    <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
                </div>
                <button type="button" onClick={() => setAddingCategory(false)}>Peruuta</button>
                <button type="submit">Tallenna</button>
            </form>
            </>
        )
    }
}