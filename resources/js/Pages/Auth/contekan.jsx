// const { data, setData, post, processing, errors, reset } = useForm({
//     name: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
// });

// useEffect(() => {
//     return () => {
//         reset('password', 'password_confirmation');
//     };
// }, []);

// const onHandleChange = (event) => {
//     setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
// };

// const submit = (e) => {
//     e.preventDefault();

//     post(route('register'));
// };
