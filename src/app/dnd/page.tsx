"use client";

import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

const DNDPage = () => {
  return (
    <div>
      <DndContext>
        <Draggable>
          <div className="w-10 h-10 bg-red-500"></div>
        </Draggable>
        <Droppable>
          <div className="w-20 h-20 bg-green-500">Droppable</div>
        </Droppable>
      </DndContext>
    </div>
  );
};

export default DNDPage;
