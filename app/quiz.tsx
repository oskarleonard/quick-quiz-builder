"use client";

import Image from "next/image";
import { useState } from "react";
import { PRIZE_IMAGE, QUESTIONS } from "./quiz-data";

type Screen = "start" | "quiz" | "wrong" | "won";

const CONFETTI_COLORS = [
  "#f59e0b",
  "#ef4444",
  "#3b82f6",
  "#22c55e",
  "#a855f7",
  "#ec4899",
];

const CONFETTI = Array.from({ length: 48 }, (_, i) => ({
  left: (i * 29) % 100,
  delay: ((i * 17) % 40) / 10,
  duration: 3 + ((i * 13) % 25) / 10,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  rotate: (i * 47) % 360,
}));

function Confetti() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {CONFETTI.map((c, i) => (
        <span
          key={i}
          className="absolute -top-4 block h-3 w-2 rounded-sm"
          style={{
            left: `${c.left}%`,
            backgroundColor: c.color,
            transform: `rotate(${c.rotate}deg)`,
            animation: `confetti-fall ${c.duration}s linear ${c.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Quiz() {
  const [screen, setScreen] = useState<Screen>("start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const question = QUESTIONS[questionIndex];

  function startOver() {
    setQuestionIndex(0);
    setSelected(null);
    setScreen("quiz");
  }

  function answer(index: number) {
    if (selected !== null) return;
    setSelected(index);

    if (index === question.correctIndex) {
      setTimeout(() => {
        setSelected(null);
        if (questionIndex === QUESTIONS.length - 1) {
          setScreen("won");
        } else {
          setQuestionIndex(questionIndex + 1);
        }
      }, 700);
    } else {
      setTimeout(() => {
        setSelected(null);
        setScreen("wrong");
      }, 1000);
    }
  }

  return (
    <main className="page-min-h flex w-full flex-col items-center justify-center bg-gradient-to-b from-amber-100 via-orange-50 to-rose-100 px-4 py-8 text-zinc-900">
      {screen === "start" && (
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">
          <p className="text-6xl">🎂</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-rose-600">
            Grattis på 65-årsdagen!
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Innan du får din present väntar ett litet quiz om Málaga. Åtta
            frågor&nbsp;– men svarar du fel på någon får du börja om från
            början. Lycka till!
          </p>
          <button
            onClick={() => setScreen("quiz")}
            className="mt-8 w-full rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-transform active:scale-95"
          >
            Börja 65-årsquizen 🎉
          </button>
        </div>
      )}

      {screen === "quiz" && (
        <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-zinc-500">
              Fråga {questionIndex + 1} av {QUESTIONS.length}
            </p>
            <div className="flex gap-1.5">
              {QUESTIONS.map((_, i) => (
                <span
                  key={i}
                  className={`h-2.5 w-2.5 rounded-full ${
                    i < questionIndex
                      ? "bg-green-500"
                      : i === questionIndex
                        ? "bg-orange-500"
                        : "bg-zinc-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {question.image && (
            <div className="relative mb-4 h-52 w-full overflow-hidden rounded-2xl">
              <Image
                src={question.image}
                alt={question.imageAlt ?? ""}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                className="object-cover"
                placeholder="blur"
                priority
              />
            </div>
          )}

          <h2 className="text-lg font-semibold leading-snug">
            {question.question}
          </h2>

          <div className="mt-4 flex flex-col gap-2.5">
            {question.options.map((option, i) => {
              const isSelected = selected === i;
              const isCorrect = i === question.correctIndex;
              let style =
                "border-orange-200 bg-white text-zinc-800 active:bg-orange-50";
              if (isSelected && isCorrect) {
                style = "border-green-500 bg-green-500 text-white";
              } else if (isSelected && !isCorrect) {
                style = "animate-shake border-red-500 bg-red-500 text-white";
              }
              return (
                <button
                  key={option}
                  onClick={() => answer(i)}
                  disabled={selected !== null}
                  className={`w-full rounded-2xl border-2 px-4 py-3.5 text-left text-base font-medium transition-colors ${style}`}
                >
                  {option}
                  {isSelected && (isCorrect ? " ✓" : " ✗")}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {screen === "wrong" && (
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">
          <p className="text-6xl">😬</p>
          <h2 className="mt-4 text-3xl font-bold text-red-500">Fel svar!</h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            I det här quizet kostar ett fel svar dyrt&nbsp;– du får börja om
            från fråga&nbsp;1. Nytt försök!
          </p>
          <button
            onClick={startOver}
            className="mt-8 w-full rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-transform active:scale-95"
          >
            Börja om 🔄
          </button>
        </div>
      )}

      {screen === "won" && (
        <>
          <Confetti />
          <div className="w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-rose-600">🎉 Grattis! 🎉</h2>
            <p className="mt-3 text-xl font-semibold text-zinc-800">
              Du klarade quizen och har vunnit&nbsp;…
            </p>
            <p className="mt-1 text-2xl font-bold text-orange-600">
              en vinprovning! 🍷
            </p>
            <Image
              src={PRIZE_IMAGE}
              alt="Vinprovning på Antonios vingård – vinrankor, vinglas och tapas"
              className="mt-5 h-auto w-full rounded-2xl"
              sizes="(max-width: 640px) 100vw, 640px"
              placeholder="blur"
            />
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Följ med till Antonios privata vingård med havsutsikt. Provsmaka
              fem ekologiska viner och gårdens egna olivoljor, och njut av en
              generös festmåltid med iberiska tapas och hemlagad tortilla.
            </p>
            <p className="mt-6 text-xl font-semibold text-rose-600">
              Grattis på 65-årsdagen! ❤️
            </p>
          </div>
        </>
      )}
    </main>
  );
}
