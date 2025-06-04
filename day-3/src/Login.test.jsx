import "@testing-library/jest-dom"
import { render, fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, afterEach, it, vi } from "vitest"
import Login from "./Login"

describe("Login Component", () => {
    let fetchSpy;
    beforeEach(() => {
        fetchSpy = vi.spyOn(global, "fetch")
    })

    afterEach(() => {
        fetchSpy.mockRestore()
    })

    it("calls fetch with correct URL", async () => {
        fetchSpy.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ name: "bombs" })
        })

        render(<Login />)

        fireEvent.change(screen.getByLabelText("username"), { target: { value: "bombs" } })
        fireEvent.click(screen.getByText("LOG IN"))


        const alert = await screen.findByRole("alert")
        expect(alert).toHaveTextContent("bombs")
        expect(fetchSpy).toBeCalledTimes(1)
        //    expect (fetchSpy).toHaveBeenCalledWith("https://wwww.google.com")




    })
    it("calls ", () => {


    });
})
