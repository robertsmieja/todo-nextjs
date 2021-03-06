import PropTypes from "prop-types"
import "semantic-ui-css/semantic.min.css"
import { Container, Grid, Header, Table, Menu } from "semantic-ui-react"
import useSWR from "swr"
import Head from "../components/head"
import Nav from "../components/nav"
import { getUsers } from "../lib/users"

export async function getServerSideProps() {
  const data = await getUsers()
  return { props: { data } }
}

const User = (props) => {
  const initialData = props.data
  const { data } = useSWR("/user", getUsers, { initialData })

  return (
    <div>
      <Grid columns={1}>
        <Grid.Column>
          <Head title="Users" />
          <Nav />
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
      <Grid centered columns={1}>
        <Grid.Column>
          <Header as="h1" textAlign="center">
            Users
          </Header>
        </Grid.Column>
      </Grid>
      <Grid centered columns={1}>
        <Container>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>UserId</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Completed</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {data?.map((user) => (
              <Table.Body key={user.id}>
                <Table.Row>
                  {/* <Table.Cell>{todo.id}</Table.Cell>
                  <Table.Cell>{todo.userId}</Table.Cell>
                  <Table.Cell>{todo.title}</Table.Cell>
                  <Table.Cell>{todo.completed ? "Yes" : "No"}</Table.Cell> */}
                </Table.Row>
              </Table.Body>
            ))}
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      {"<"}
                      {/* <Icon name="chevron left" /> */}
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      {">"}
                      {/* <Icon name="chevron right" /> */}
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
      </Grid>
    </div>
  )
}

User.propTypes = {
  data: PropTypes.array,
}
User.displayName = "User"

export default User
