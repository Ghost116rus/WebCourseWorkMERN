import {Button, Container} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from "react-bootstrap/Form";
import {observer} from "mobx-react-lite";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {SEARCH_ROUTE} from "../utils/consts";



const SearchComponent = observer(() => {

    const navigate = useNavigate()

    const {SearchType, searchString} = useParams();

    const [searchStr, setSearchString] = useState(searchString || '')
    let [searchType, SetSearchType] = useState(SearchType || 0)

    const search = () => {

        if (searchString.split(" ")[0].length !== 0)
        {
            navigate(SEARCH_ROUTE + "/" + searchType + "/" + searchStr)
        } else {
            alert("Некорректно введена строка поиска");
        }
    }

    return(
        <Container className="d-flex justify-content-center"  style={{backgroundColor: "white", minWidth: "350px", width:"50vw", borderRadius: "30px"}}>
            <Form className="d-flex align-self-center " style={{minWidth: "350px", width:"50vw", height:40, marginLeft: "5px", marginRight: "5px"}}>
                <Form.Control
                    type="search"
                    placeholder= "Поиск книги расширенный"
                    aria-label="Search"
                    value={searchStr || ""}
                    onChange={e => setSearchString(e.target.value)}
                />
                <Dropdown as={ButtonGroup}>
                    <Button variant="success" style={{width: "150px"}} onClick={search}>Поиск</Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => SetSearchType(0)}>По названию</Dropdown.Item>
                        <Dropdown.Item onClick={() => SetSearchType(1)}>По автору</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </Form>
        </Container>
    )
})

export default SearchComponent;