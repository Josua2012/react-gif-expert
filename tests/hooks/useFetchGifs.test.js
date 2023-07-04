import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas en el hook useFetchGifs', () => { 
    test('debe regresar el estado inicial', () => { 

        // Hooks can only be called inside of the body of a function component.
        //const { images, isLoading } = useFetchGifs();
        // por lo que hay que utilizar la función renderHook
        // posibles  devoluciones: rerender, result, unmount
        const { result  } = renderHook( () => useFetchGifs('One Punch'));
        //console.log(result);
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
        
     });

     test('debe de retornar un arreglo de imagenes y IsLoading en false', async() => { 

        // Hooks can only be called inside of the body of a function component.
        //const { images, isLoading } = useFetchGifs();
        // por lo que hay que utilizar la función renderHook
        // posibles  devoluciones: rerender, result, unmount
        const { result  } = renderHook( () => useFetchGifs('One Punch'));
        //console.log(result);
        
        // Esta función espera a que algo suceda
        // waitFor es una promesa
        // El segundo parámetro le indica que si pasado un segundo no se ha completado
        // deberá devolver un error
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 1000
            }
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
        
     });
 });