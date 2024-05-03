"use client";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

function DraggableItem({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}

function DroppableContainer({ children }: { children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id: "A" });
  return <div ref={setNodeRef}>{children}</div>;
}

export default function MyComponent() {
  return (
    <DndContext>
      <DroppableContainer>
        <DraggableItem id="item-1">Item 1</DraggableItem>
        <DraggableItem id="item-2">Item 2</DraggableItem>
        <DraggableItem id="item-3">Item 3</DraggableItem>
      </DroppableContainer>
    </DndContext>
  );
}
