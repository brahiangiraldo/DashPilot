import React, { useEffect, useRef, useState } from "react"
import { IconFactory } from "@/components/atoms/icons/domain/use-cases/factoryIcon"
import "./inputSearch.css"
import { InputSearchProps } from "./InputSearchProps"

const InputSearch = (props: InputSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const containerSearchRef = useRef<HTMLDivElement>(null)
  const [inputFocused, setInputFocused] = useState(false)

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)
    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  function handleOutsideClick(event: MouseEvent) {
    if (!containerSearchRef.current?.contains(event.target as Node)) {
      setInputFocused(false)
    }
  }

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
      setInputFocused(true)
    }
  }

  const handleCaptureEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.handleEnter ? props.handleEnter() : null
    }
  }

  const onClickClear = () => {
    if (inputRef.current) {
      inputRef.current.value = ""
      props.handleClear()
    }
  }

  return (
    <div
      ref={containerSearchRef}
      className={`input-search-container ${inputFocused ? "input-focused" : ""}`}
      onClick={handleClick}
    >
      <input
        className="search-input"
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        ref={inputRef}
        onFocus={handleClick}
        onKeyDown={handleCaptureEnter}
        style={{
          paddingLeft:
            props.iconPosition === "left" || !props.iconPosition
              ? "50px"
              : "35px",
          paddingRight: props.iconPosition === "right" ? "50px" : "35px",
        }}
      />
      {props.value && inputFocused ? (
        <div
          className="icon-container clear-icon"
          onClick={onClickClear}
          style={{
            right:
              props.iconPosition === "left" || !props.iconPosition
                ? "15px"
                : undefined,
            left: props.iconPosition === "right" ? "15px" : undefined,
          }}
        >
          <IconFactory
            width={10}
            height={10}
            color={inputFocused ? "var(--gray500)" : "var(--primary600)"}
            name="RejectAction"
          />
        </div>
      ) : null}
      <div
        className="icon-container search-icon"
        style={{
          left:
            props.iconPosition === "left" || !props.iconPosition
              ? "15px"
              : undefined,
          right: props.iconPosition === "right" ? "15px" : undefined,
        }}
      >
        <IconFactory
          width={25}
          height={25}
          color={inputFocused ? "var(--gray500)" : "var(--primary600)"}
          name="Search"
        />
      </div>
    </div>
  )
}

export default InputSearch
