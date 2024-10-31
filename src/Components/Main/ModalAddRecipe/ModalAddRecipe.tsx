import {Button, Close, InputBlock, Label, ModalHeader, NewRecipeInfo, NewRecipeInput, NewRecipeText, UploadImage, Wrapper} from "./style";
import {createPortal} from "react-dom";
import closeSvg from '../ModalAddRecipe/images/close.svg'
import React, {useId, useRef, useState} from "react";
import { AddedImagesIcons } from "./AddedImagesIcons/AddedImagesIcons";
import {useDispatch, useSelector} from "react-redux";
import {addRecipes} from "../../../redux/recipes/slice";
import {TRecipeItem} from "../../../redux/recipes/types";
import {recipesSelector} from "../../../redux/recipes/selectors";
import {useFormik} from 'formik'
import {initialValues, TFile} from "./helpers";
import {Input} from "./Input/Input";
import {TextArea} from "./TextArea/TextArea";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';


type TModalAddRecipe = {
    setModalAddOpen : React.Dispatch<React.SetStateAction<boolean>>,
}
export const ModalAddRecipe:React.FC<TModalAddRecipe> = ({setModalAddOpen}) => {

    const id = useId()
    const recipesArray = useSelector(recipesSelector)
    const dispatch = useDispatch()
    const uploadRef = useRef<HTMLInputElement>(null);

    const schemas = Yup.object().shape({
        name: Yup.string()
            .required('Введите название рецепта')
            .min(2,'Минимум 2 символа')
            .test('nameRepeat','Рецепт с таким именем уже есть',
                value => {
                    const newName = value[0].toUpperCase()+value.slice(1)
                    const namesArray = recipesArray.map(el => el.name)
                    return !namesArray.includes(newName)
                } ),
        text: Yup.string()
            .required('Введите текст рецепта')
            .min(20, 'Рецепт должен содержать минимум 20 символов'),
        timeHours: Yup.number()
            .required('Введите часы')
            .min(0, 'Число должно быть больше нуля')
            .typeError('Должно быть числом')
            .integer('Необходимо ввести целое число'),

        timeMins: Yup.number()
            .required('Введите минуты')
            .positive('Число должно быть положительным')
            .typeError('Должно быть числом')
            .integer('Необходимо ввести целое число')
            .max(59, 'Максимум 59 минут'),
        difficulty: Yup.number()
            .required()
            .positive('Число должно быть положительным')
            .integer('Необходимо ввести целое число')
            .typeError('Должно быть числом')
            .min(1,'Не менее 1')
            .max(10, 'Не более 10'),
        images: Yup.array().min(1).required()
    })
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: schemas,
        onSubmit: values => {
            handlePushRecipe(values)
        },
    });
    const { errors, touched, values, setFieldValue } =formik
console.log(values.images)
    const handleImageChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);

            const filePromises = files.map((file) => {
                return new Promise<TFile>((resolve) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                        resolve({
                            id: uuidv4(), // Генерируем уникальный ID
                            content: reader.result as string,
                        });
                    };
                });
            });
            const resolvedFiles = await Promise.all(filePromises);
            setFieldValue('images', [...values.images, ...resolvedFiles]);
        }
    };


    const handleClickClose = () => {
        setModalAddOpen(false)
    }

    const handleClickUpload = () =>{
        if(uploadRef.current){
            uploadRef.current.click()
        }
    }

    const handlePushRecipe = (values:any) => {
        const{text,difficulty,images,timeMins,
            timeHours} = values ||{}

             const name = values.name[0].toUpperCase()+values.name.slice(1)
            const timeTotal = timeHours*60 + timeMins

            const obj:TRecipeItem = {id,name, text, timeHours, timeMins, difficulty, images, timeTotal}
             dispatch(addRecipes(obj))
            setModalAddOpen(false)
    }

    const handleDeleteImage = (id:string) => {
        setFieldValue('images', values.images.filter(x => x.id !== id))
    }


    return createPortal(
        <Wrapper>
            <ModalHeader>
                <p>Добавить новый рецепт</p>
                <Close src={closeSvg} onClick={handleClickClose}/>
            </ModalHeader>

                    <NewRecipeInfo>
                        <div  style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={values.name}
                                name={'name'}
                                label={'1. Введите название рецепта:'}
                                id={'name'}
                                placeholder={'Введите название рецепта'}
                                error={errors.name}
                                touched={touched.name}
                            />

                            <TextArea
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={values.text}
                                name={'text'}
                                label={'2. Введите рецепт:'}
                                id={'text'}
                                placeholder={'Введите рецепт'}
                                error={errors.text}
                                touched={touched.text}
                            />

                            <Input
                                isNum={true}
                                value={values.timeHours}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name={'timeHours'}
                                label={'3. Введите время готовки:'}
                                id={'timeHours'}
                                placeholder={'часов'}
                                error={errors.timeHours}
                                touched={touched.timeHours}
                            />

                            <Input
                                isNum={true}
                            value={values.timeMins}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name={'timeMins'}
                            label={''}
                            id={'timeMins'}
                            placeholder={'минут'}
                            error={errors.timeMins}
                            touched={touched.timeMins}
                        />

                            <Input
                                value={values.difficulty}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name={'difficulty'}
                                label={'4. Введите уровень сложности от 1 до 10:'}
                                id={'difficulty'}
                                placeholder={'Введите уровень сложности '}
                                error={errors.difficulty}
                                touched={touched.difficulty}
                            />

                            <InputBlock>
                                <UploadImage onClick={handleClickUpload}>Прикрепите фото блюда:</UploadImage>
                                 <NewRecipeInput hidden ref={uploadRef} multiple onChange={(e)=>handleImageChange(e)} type='file' accept='image/*'/>
                                {values.images.length ? <AddedImagesIcons images={values.images} handleDeleteImage={handleDeleteImage}/> : null}
                            </InputBlock>
                            <Button onClick={()=>formik.submitForm()}>Добавить рецепт</Button>
                        </div>
                    </NewRecipeInfo>
        </Wrapper>, document.body
    )
}