
import { Container, Card, Form, Button} from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useLocation } from 'react-router-dom';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE 
    console.log(isLogin);

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    {isLogin ?
                        <Container>
                            <Form.Control
                                className='mt-3'
                                placeholder='Введите ваш email...'
                            />
                            <Form.Control
                                className='mt-3'
                                placeholder='Введите ваш пароль...'
                            />
                        </Container>
                        :
                        <Container>
                            <Form.Control
                                className='mt-3'
                                placeholder='Введите ваше имя...'
                            />
                            <Form.Control
                                className='mt-3'
                                placeholder='Введите ваш номер телефона...'
                            />
                            <Form.Control
                                className='mt-3'
                                placeholder='Введите ваш email...'
                            />
                            <Form.Control
                                className='mt-3'
                                placeholder='Введите ваш пароль...'
                            />
                        </Container>
                    }

                    <Container className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизуйся!</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                        >
                            { isLogin ? 'Войти' : 'Регистрация' }
                        </Button>
                    </Container>

                </Form>

            </Card>
        </Container>
    );
};

export default Auth;