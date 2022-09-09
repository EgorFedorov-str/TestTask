import React, {useState, useEffect} from 'react';
import './styles.css';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import _ from "lodash";
import {v4} from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../../store/actions/todoActions';



function Todos() {
  const dispatch = useDispatch()
  const {todos} = useSelector(state => state.todo)

   
    useEffect(() => {
      dispatch(fetchTodo())
    }, [])
  
  const [text, setText] = useState("")
  const [state, setState] = useState({})

  useEffect(() => {
    setState({
      "todo": {
        title: "Todo",
        items: JSON.parse(JSON.stringify(todos
          .filter((todo) => !todo.completed)
          .map((todo) => {
            return(
              {
                id: v4(),
                name: todo.title
              }
            )
          })))
      },
      "done": {
        title: "Completed",
        items: JSON.parse(JSON.stringify(todos
          .filter((todo) => todo.completed)
          .map((todo) => {
            return(
              {
                id: v4(),
                name: todo.title
              }
            )
          })))
      }
    })
  }, [todos])
  
  
  const handleDragEnd = (data) => {
    if (!data.destination) {
      return
    }

    if (data.destination.index === data.source.index && data.destination.droppableId === data.source.droppableId) {
      return
    }

    
    const itemCopy = {...state[data.source.droppableId].items[data.source.index]}

    setState(prev => {
      prev = {...prev}
      prev[data.source.droppableId].items.splice(data.source.index, 1)
      prev[data.destination.droppableId].items.splice(data.destination.index, 0, itemCopy)

      return prev
    })
  }

  const addItem = () => {
    setState(prev => {
      if (!!text.length) {
      return {
        ...prev,
        todo: {
          title: "Todo",
          items: [
            {
              id: v4(),
              name: text
            },
            ...prev.todo.items
          ]
        }
      }
    }
    return {
      ...prev
    }
    })

    setText("")
  }

  return (
    <div className="Todos">
      <div className="addTodo">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={addItem}>Add</button>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          return(
            <div key={key} className={"column"}>
              <h3>{data.title}</h3>
              <Droppable droppableId={key}>
                {(provided, snapshot) => {
                  return(
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={"droppable-col"}
                    >
                      {data.items.map((el, index) => {
                        return(
                          <Draggable key={el.id} index={index} draggableId={el.id}>
                            {(provided, snapshot) => {
                              // console.log(snapshot)
                              return(
                                <div
                                  className={`item ${snapshot.isDragging && "dragging"}`}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {el.name}
                                </div>
                              )
                            }}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )
                }}
              </Droppable>
            </div>
          )
        })}
      </DragDropContext>
    </div>
  );
}

export default Todos;