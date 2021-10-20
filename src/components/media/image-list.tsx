import { IImage } from "./media.interface";
import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    padding: 16px;
    flex-wrap: wrap;
    align-content: flex-start;
`
const Image = styled.img`
    height: 140px;
    width: 140px;
    margin: 5px;
    object-fit: contain;
`

type Props = {
    images: IImage[]
}

const ImageList: React.FC<Props> = (props: Props) => {

    return (
        <Container>
            {props.images.map((image, key) => (
                <Image key={key} src={image.imgurl} alt={image.imgid} />
            ))}
        </Container>
    )
}

export default ImageList