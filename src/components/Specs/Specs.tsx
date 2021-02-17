import React, { PureComponent } from "react";
import { Typography } from "../Typography/Typography.bundle";
import { cn } from "@bem-react/classname";
import { SpecsItem } from "./Item/Specs-Item";
import { Cut } from "../Cut/Cut.bundle";
import { SpecsTitle } from "./Title/Specs-Title";
import { SpecsDescription } from "./Description/Specs-Description";

import "./Specs.scss";

interface ISpecsGroup {
    groupName: string;
    groupSpecs: ISpecsItem[];
}

interface ISpecsItem {
    name: string;
    value: string;
}

export interface ISpecs {
    mode?: "preview";
    description?: {
        short: string;
        full: string;
    };
    specs?: ISpecsGroup[];
}

interface IState {
    showMoreSpecs: boolean;
    showSpecs: boolean;
    showDescription: boolean;
}

export const cnSpecs = cn("Specs");

export class Specs extends PureComponent<ISpecs, IState> {
    public state: IState = {
        showMoreSpecs: false,
        showSpecs: false,
        showDescription: false,
    };

    public openMore = () => {
        this.setState({
            showMoreSpecs: true,
        });
    };

    public closeModal = () => {
        this.setState({
            showMoreSpecs: false,
        });
    };

    public UNSAFE_componentWillMount() {
        const showDescription =
            Boolean(this.props.description) &&
            (this.props.description!.full.length > 0 || this.props.description!.short.length > 0);
        const showSpecs = this.props.specs!.length > 0 && this.props.specs![0].groupSpecs.length > 0;
        this.setState({
            showSpecs,
            showDescription,
        });
    }

    public render() {
        const { showDescription, showSpecs } = this.state;
        const { mode } = this.props;

        if (["preview"].indexOf(mode!) === -1) {
            return null;
        }

        return (
            <div className={cnSpecs(null, { mode: mode! })}>
                {mode === "preview" && (showSpecs || showDescription) ? this.renderPreview() : null}
                {this.state.showMoreSpecs ? this.renderMore() : null}
            </div>
        );
    }

    private renderPreview = () => {
        const { showDescription, showSpecs } = this.state;

        const visible = () => (
            <div>
                <Typography tag="h3">{this.props.specs![0].groupName}</Typography>
                {this.generateItems(0)}
            </div>
        );
        const invisible = () => (
            <div className={cnSpecs("More", null, ["Specs-Content"])}>{showSpecs ? this.generateSpecs() : null}</div>
        );

        return (
            <div className={cnSpecs("Preview", null, ["Specs-Content"])}>
                <SpecsTitle showSpecs={showSpecs} showDescription={showDescription} />
                {showDescription ? <SpecsDescription text={this.props.description!.short} expandable /> : null}
                {showSpecs ? (
                    <Cut more="Посмотреть все характеристики" visible={visible()} invisible={invisible()} />
                ) : null}
            </div>
        );
    };

    private renderMore = () => {
        const { showSpecs } = this.state;

        return (
            <div className={cnSpecs("More", null, ["Specs-Content"])}>{showSpecs ? this.generateSpecs() : null}</div>
        );
    };

    private generateSpecs = () => {
        return this.props.specs!.map((value, index) =>
            index === 0 ? null : (
                <div key={index} className={cnSpecs("GroupSpecs")}>
                    <Typography tag="h3">{value.groupName}</Typography>
                    {this.generateItems(index)}
                </div>
            )
        );
    };

    private generateItems = (groupIndex: number, limit: number = 0) => {
        const items = this.props.specs![groupIndex].groupSpecs;
        const list = limit > 0 ? items.slice(0, limit) : items;

        return list.map(({ name, value }, index) => <SpecsItem name={name} value={value} key={index} />);
    };

    public static defaultProps: Partial<ISpecs> = {
        specs: [],
    };
}

export { SpecsItem } from "./Item/Specs-Item";
export * from "./Item/Specs-Item";
