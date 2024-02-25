import express, { Application } from "express"
import dotenv from "dotenv"
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/rolecontrollers"

dotenv.config()

const app: Application = express()

app.use(express.json())


const PORT = process.env.PORT || 4001

app.get('/healthy', (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: "server is healthy"
        }
    )
})


//////////////////////////////////// ROLES ROUTES

app.get(`/roles`, getRoles)
app.post(`/roles/:id`, createRoles)
app.put(`/roles/:`, updateRoles)
app.delete(`/roles`, deleteRoles)


app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})