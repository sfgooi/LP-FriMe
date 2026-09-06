"use client";

import { useEffect, useState } from "react";

type Choice = "meet" | "extend" | "pass";
type Phase = "talking" | "choose";

const CHOICES: { id: Choice; label: string }[] = [
  { id: "meet", label: "会いたい" },
  { id: "extend", label: "もう15分話す" },
  { id: "pass", label: "やめておく" },
];

const STATUS: Record<Choice, string> = {
  meet: "回答しました。デートプランを決めましょう。",
  extend: "延長を希望しました",
  pass: "このお相手とは次に進みません",
};

function Person({ tone }: { tone: "coral" | "blue" }) {
  return (
    <div className={`vc-tile vc-tile-${tone}`}>
      <div className={`vc-person vc-person-${tone}`}>
        <span className="vc-head" />
        <span className="vc-body" />
      </div>
      <span className="vc-name">{tone === "coral" ? "あなた" : "相手"}</span>
    </div>
  );
}

export default function VideoCallDemo() {
  const [seconds, setSeconds] = useState(15 * 60);
  const [phase, setPhase] = useState<Phase>("talking");
  const [choice, setChoice] = useState<Choice | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("choose");
      setSeconds(0);
      return;
    }
    if (phase !== "talking") return;

    const id = setInterval(() => {
      setSeconds((s) => Math.max(0, s - 60));
    }, 500);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase === "talking" && seconds <= 0) setPhase("choose");
  }, [seconds, phase]);

  const onChoose = (id: Choice) => {
    if (id === "extend") {
      setChoice(null);
      setSeconds(15 * 60);
      setPhase("talking");
      return;
    }
    setChoice(id);
  };

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const display = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <div className="vc-wrap">
      <div
        className={`vc-card${phase === "choose" ? " is-choose" : ""}${choice === "pass" ? " is-pass" : ""}`}
      >
        <div className="vc-timer" aria-label={`残り ${mins}分${secs}秒`}>
          <span className="vc-live" />
          {display}
        </div>

        <div className="vc-stage">
          <div className="vc-feeds">
            <Person tone="coral" />
            <Person tone="blue" />
          </div>

          {phase === "choose" && (
            <div className="vc-modal" role="dialog" aria-label="通話後の回答">
              <div className="vc-modal-panel">
                <p className="vc-modal-title">それぞれ答えてください</p>
                <p className="vc-modal-note">相手の回答は見えません</p>
                <div className="vc-btns">
                  {CHOICES.map((c) => {
                    const on = choice === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        className={`vc-btn vc-btn-${c.id}${on ? " is-on" : ""}`}
                        aria-pressed={on}
                        onClick={() => onChoose(c.id)}
                      >
                        {c.id === "meet" && on && <span className="vc-btn-dot" />}
                        {c.label}
                      </button>
                    );
                  })}
                </div>
                {choice ? <p className="vc-status">{STATUS[choice]}</p> : null}
              </div>
            </div>
          )}
        </div>
      </div>
      {phase === "talking" && (
        <p className="vc-hint">タイマーが0になると…？</p>
      )}
    </div>
  );
}
