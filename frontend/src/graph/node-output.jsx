import React from "react";
import { Badge, Accordion } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Remark } from "react-remark";

export const NodeOutput = ({ output }) => {
    const outputs = [];

    output.forEach((out) => {
        outputs.push(
            <Accordion.Item eventKey={out.column} key={out.column}>
                <Accordion.Header>
                    <div className="d-flex">
                        <div className="mr-auto p-2">{out.column}</div>
                        <div className="p-2">
                            <Badge bg="secondary">{out.type}</Badge>
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <Remark>{out.description}</Remark>
                </Accordion.Body>
            </Accordion.Item>
        );
    });

    return <Accordion>{outputs}</Accordion>;
};
