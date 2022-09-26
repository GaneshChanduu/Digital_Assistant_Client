/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render recorded sequences
 * Associated Route/Usage: *
 */

import React, { useCallback, useEffect } from "react";
import "../App.scss";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import _, { debounce } from "lodash";
import { profanity } from "@2toad/profanity";
import { setToStore, postRecordSequenceData, getObjData } from "../util";
import { updateRecordClicks } from "../services/recordService";
import { CONFIG } from "../config";

export interface MProps {
  sequenceName?: string;
  isShown?: boolean;
  hide?: () => void;
  data?: any;
  refetchSearch?: Function;
  recordHandler?: Function;
}

/**
 * To render recorded sequence elements
 * @returns HTML Elements
 */

export const RecordedSeq = (props: MProps) => {
  const [name, setName] = React.useState<string>("");
  const [labels, setLabels] = React.useState<any>([]);
  const [labelProfanity, setLabelProfanity] = React.useState<boolean>(false);
  const [disableForm, setDisableForm] = React.useState<boolean>(false);
  const [recordData, setRecordData] = React.useState<any>(props.data);

  React.useEffect(() => {
    setRecordData([...props.data]);
  }, [props.data]);

  const storeRecording = (data: any) => {
    setRecordData([...data]);
    setToStore(data, CONFIG.RECORDING_SEQUENCE, false);
  };

  const setEdit = (index: number) => {
    recordData[index].editable = true;
    storeRecording(recordData);
  };

  const handleDebounceFn = async (index: number, inputValue: string) => {
    /**check profanity for input text */
    if (profanity.exists(inputValue)) {
      recordData[index].profanity = true;
      storeRecording(recordData);
      setDisableForm(true);
      return;
    }
    delete recordData[index].profanity;
    setDisableForm(false);
    const _cloneRecObj = _.cloneDeep(props?.data?.[index]);
    if (_.isEmpty(_cloneRecObj)) return;
    const _objData: any = getObjData(_cloneRecObj?.objectdata);
    if (!_.isEmpty(_objData)) {
      setRecordData([...props?.data]);
      _objData.meta.displayText = inputValue;
      _cloneRecObj.objectdata = JSON.stringify(_objData);
      recordData[index].objectdata = JSON.stringify(_objData);
      storeRecording(recordData);
      await updateRecordClicks(_cloneRecObj);
    }
  };

  const debounceFn = useCallback(debounce(handleDebounceFn, 1000), [
    props?.data,
  ]);

  const handleChange = (index: number) => (event: any) => {
    debounceFn(index, event.target.value);
  };

  const handlePersonal = (index: number) => (event: any) => {
    updatePersonalOrSkipPlay("isPersonal", index);
  };

  const handleSkipPlay = (index: number) => (event: any) => {
    updatePersonalOrSkipPlay("skipDuringPlay", index);
  };

  const updatePersonalOrSkipPlay = (key: string, index: number) => {
    const _objData = getObjData(recordData[index]?.objectdata);
    if (_objData) {
      if (_objData.meta[key] === undefined) _objData.meta[key] = false;
      _objData.meta[key] = !_objData.meta[key];
      console.log(_objData);
      recordData[index].objectdata = JSON.stringify(_objData);
      storeRecording(recordData);
      updateRecordClicks(recordData[index]);
    }
  };

  const addLabel = () => {
    labels.push({ label: "" });
  };

  const removeLabel = (index: number) => {
    labels.splice(index, 1);
    setLabels([...labels]);
  };

  const cancelRecording = () => {
    if (props.recordHandler) props.recordHandler("cancel");
    setToStore([], CONFIG.RECORDING_SEQUENCE, false);
  };

  const submitRecording = async () => {
    let _labels: any = [name];
    if (labels.length) {
      const _extraLabels = labels.map((label: any) => label.label);
      _labels = [..._labels, ..._extraLabels];
    }

    const instance = await postRecordSequenceData({
      name: JSON.stringify(_labels),
    });
    if (instance && props?.refetchSearch) {
      props.refetchSearch("on");
    }
    if (props.recordHandler) props.recordHandler("cancel");
    setToStore(false, CONFIG.RECORDING_SWITCH_KEY, true);
    setToStore([], CONFIG.RECORDING_SEQUENCE, false);
  };

  const onChange = async (e: any) => {
    setName(e.target.value);
    if (profanity.exists(e.target.value)) {
      setLabelProfanity(true);
      setDisableForm(true);
      return;
    } else {
      setLabelProfanity(false);
      setDisableForm(false);
    }
  };

  const onExtraLabelChange = (index: number) => (e: any) => {
    labels[index].label = e.target.value;
    setLabels([...labels]);
    if (profanity.exists(e.target.value)) {
      labels[index].profanity = true;
      setLabels([...labels]);
      setDisableForm(true);
      return;
    } else {
      delete labels[index].profanity;
      setDisableForm(false);
    }
  };

  const renderData = () => {
    if (!props.isShown) return;
    else
      return recordData?.map((item: any, index: number) => {
        return (
          <li
            className="uda-recorded-label-editable completed"
            key={`rec-seq-${index}`}
          >
            <div
              className="flex-card flex-center"
              style={{ alignItems: "center" }}
            >
              <span id="uda-display-clicked-text" style={{ flex: 2 }}>
                <input
                  type="text"
                  id="uda-edited-name"
                  name="uda-edited-name"
                  className={`uda-form-input ${
                    !item.editable ? "non-editable" : ""
                  } ${item.profanity ? "profanity" : ""}`}
                  placeholder="Enter Name"
                  // onChange={onLabelChange(index)}
                  onChange={handleChange(index)}
                  defaultValue={item?.clickednodename}
                  readOnly={item.editable ? false : true}
                  style={{ width: "85%! important" }}
                  // onKeyDown={handleLabelChange(index)}
                  onClick={() => {
                    setEdit(index);
                  }}
                />
              </span>

              {/* <span className="halign-right">
                <button
                  className="uda-tutorial-btn"
                  style={{ padding: "0px", width: 24 }}
                  type="button"
                  id="uda-edit-clickedname"
                >
                  <BsFillPencilFill
                    onClick={() => {
                      setEdit(index);
                    }}
                  />
                </button>
              </span> */}
              <span></span>
              <br />
            </div>
            {/* <button
              className="uda-tutorial-btn"
              style={{
                display: "none",
                padding: "5px !important",
                height: "40px",
              }}
              type="button"
              id="uda-edit-clickedname-submit"
            >
              save
            </button> */}
            <div className="flex-card flex-vcenter small-text">
              <input
                type="checkbox"
                id="UDA-skip-duringPlay"
                className="uda-checkbox flex-vcenter"
                checked={getObjData(item?.objectdata)?.meta?.skipDuringPlay}
                onClick={handleSkipPlay(index)}
              />
              <label className="uda-checkbox-label">Skip during play</label>
              <span
                className="info-icon"
                title="Select this box if this field / text is not required to navigate while processing."
              >
                <BsFillInfoCircleFill />
              </span>
            </div>

            {recordData?.length - 1 === index && (
              <div className="flex-card flex-vcenter small-text">
                <input
                  type="checkbox"
                  id="isPersonal"
                  checked={getObjData(item?.objectdata)?.meta?.isPersonal}
                  onClick={handlePersonal(index)}
                />
                <label>Personal Information</label>
                <span
                  className="info-icon"
                  title="select this box if this field / text contains personal information like name / username. We need to ignore personal information while processing."
                >
                  <BsFillInfoCircleFill />
                </span>
              </div>
            )}
          </li>
        );
      });
  };

  return props?.isShown ? (
    <div className="uda-card-details">
      <h5>Recorded Sequence</h5>
      <hr style={{ border: "1px solid #969696", width: "100%" }} />
      <ul className="uda-recording" id="uda-recorded-results">
        {renderData()}
      </ul>
      <hr style={{ border: "1px solid #969696", width: "100%" }} />
      <div style={{ textAlign: "left" }}>
        <input
          type="text"
          id="uda-recorded-name"
          name="uda-save-recorded[]"
          className={`uda-form-input ${labelProfanity ? "profanity" : ""}`}
          placeholder="Enter Label"
          onChange={onChange}
        />

        <div id="uda-sequence-names">
          {labels?.map((item: any, index: number) => {
            return (
              <div className="flex-card flex-center" key={`label-${index}`}>
                <input
                  type="text"
                  id="uda-recorded-name"
                  name="uda-save-recorded[]"
                  className={`uda-form-input uda-form-input-reduced ${
                    item.profanity ? "profanity" : ""
                  }`}
                  placeholder="Enter Label"
                  onChange={onExtraLabelChange(index)}
                  value={item.label}
                />
                <button
                  className="delete-btn uda-remove-row"
                  style={{ color: "white", width: 40, marginLeft: 16 }}
                  onClick={() => removeLabel(index)}
                >
                  <BsFillTrashFill />
                </button>
              </div>
            );
          })}
        </div>

        <div style={{ marginBottom: "10px", padding: "20px 0" }}>
          <button className="add-btn uda_exclude" onClick={() => addLabel()}>
            + Add Label
          </button>
        </div>

        <div
          className="flex-card flex-center"
          style={{ clear: "both", marginTop: 50 }}
        >
          <div className="flex-card flex-start" style={{ flex: 2 }}>
            <button
              className="uda-record-btn"
              onClick={() => cancelRecording()}
              style={{ flex: 1 }}
            >
              <span className="uda_exclude">Cancel and Exit</span>
            </button>
          </div>
          <div className="flex-card flex-end" style={{ flex: 1 }}>
            <button
              className={`uda-tutorial-btn uda_exclude ${
                disableForm ? "disabled" : ""
              }`}
              onClick={() => submitRecording()}
              disabled={disableForm}
              // style={{ float: "right", padding: "5px 20px" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
