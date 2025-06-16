import HowToCard from "../components/HowToCard";
import Masonry from 'react-masonry-css';

export default function HomePage() {
    return (
      <div style={{ padding: '20px' }}>
      <div className="manual-grid">

        

        <HowToCard title = ">BreakPoint TCG" className="howto-card card-1">
        <img src={`/Images/MainPoster.png`} width="400" />
        </HowToCard>

        
       
        

        <HowToCard title = "🎯 Goal of the Game" className="howto-card card-2">
        <p>
          BreakPoint is a fast-paced, turn-based card game where each player selects a team of three characters and battles to defeat their opponent’s team. Victory is achieved through careful use of abilities, smart targeting, and managing cooldowns and charge to outmaneuver the enemy.
        </p>
        </HowToCard>

        

        
        <HowToCard title = "🧱 Game Setup" className="howto-card card-3">
        <ul>
          <li><strong>Players:</strong> 2</li>
          <li><strong>Team Size:</strong> 3 characters per player</li>
          <li><strong>Win Condition:</strong> Eliminate all 3 of your opponent’s characters</li>
        </ul>
        <p>
          Once both players have selected their characters, the match begins with all six placed in a circular arena. Character turn order is determined by Speed, with the fastest acting first.
        </p>

        <img src="/Images/battleGround.png" alt="Arena Layout" style={{ width: '100%', maxWidth: '600px', marginTop: '10px' }} />
        </HowToCard>
        

        
          <HowToCard title = "⏱️ Turn Flow" className="howto-card card-4">
          <p>
            BreakPoint is a turn-based game, and characters act one at a time based on their Speed. The character with the highest Speed takes the first turn, followed by the next fastest, and so on.
          </p>

          <p>Each turn consists of the following steps:</p>
          <ol>
            <li><strong>Highlight:</strong> The active character is visually highlighted.</li>
            <li><strong>Select Ability:</strong> The player chooses one of the three available abilities (Normal, Skill, or Signature).</li>
            <li><strong>Choose Target(s):</strong> Valid targets light up automatically,and a prompt at the bottom of the screen tells you how many targets can be selected</li>
            <li><strong>Hit Detection:</strong> Once a target has been selected and the confirm button is hit, the move logic executes. A popup in the middle of the screen wil let you know if a target was struck or missed </li>
            <li><strong>Execute:</strong> The chosen ability is used, applying damage, healing, or status effects.</li>
            <li><strong>Cooldowns & Charge:</strong> The ability goes on cooldown and Signature Charge increases.</li>
            <li><strong>Next Turn:</strong> Control passes to the next character in the Speed order.</li>
          </ol>

        
            <img src="/Images/turnFlow.png" alt="Clockwise Order" style = {{width: "100%"}}/>
          
          </HowToCard>
        

        
          <HowToCard title = "🧩 Understanding a Character Card" className="howto-card card-5">
          <p>
            Each character card contains vital information that helps you plan your moves and assess your options during battle. Here's a breakdown of the card's components:
          </p>

          <img
            src="/Images/CardAnatomy.png"
            alt="Character card anatomy with numbered labels"
            style={{ width: '100%', maxWidth: '600px', marginTop: '10px' }}
          />
          <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
            (Image: Sample character card with arrows pointing to each labeled component.)
          </p>

          <ol>
            <li><strong>Portrait</strong> – The visual representation of the character.</li>
            <li><strong>Name & Rarity</strong> – Character’s name and classification (e.g., C, UC, R, UR, L).</li>
            <li><strong>HP Bar</strong> – Displays the current health of the character. If HP reaches 0, they are defeated.</li>
            <li><strong>Signature Charge Bar</strong> – Shows progress toward unleashing the powerful Signature ability.</li>
            <li><strong>Abilities</strong> – Four total:
              <ul style={{ marginTop: '5px' }}>
                <li><strong>Passive:</strong> Always active or conditionally triggered.</li>
                <li><strong>Normal:</strong> Low-power, short cooldown.</li>
                <li><strong>Skill:</strong> Medium-power, longer cooldown.</li>
                <li><strong>Signature:</strong> Powerful ability unlocked when charge is full.</li>
              </ul>
            </li>
          </ol>
          </HowToCard>
        


        
          <HowToCard title = "🌀 Ability Types"className="howto-card card-6">
            <p>
              Each character has four unique abilities, categorized by purpose and availability. Managing these effectively is key to victory. Abilites in the game are shown in the same order as this table
            </p>

            <table style={{ width: '100%', maxWidth: '600px', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr>
                  <th style={{ borderBottom: '1px solid #555', padding: '8px' }}>Type</th>
                  <th style={{ borderBottom: '1px solid #555', padding: '8px' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px' }}><strong>Passive</strong></td>
                  <td style={{ padding: '8px' }}>Always active or triggered by specific conditions. Requires no input from the player.</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><strong>Normal</strong></td>
                  <td style={{ padding: '8px' }}>Basic attack with a short cooldown. Reliable and fast.</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><strong>Skill</strong></td>
                  <td style={{ padding: '8px' }}>A more powerful ability with a longer cooldown. May apply status effects.</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><strong>Signature</strong></td>
                  <td style={{ padding: '8px' }}>The ultimate ability. Requires full Signature Charge to use and resets charge afterward.</td>
                </tr>
              </tbody>
            </table>

            <img
              src="/Images/huronMoves.png"
              alt="image showing hurons passive,normal,skill and sig"
              style={{ width: '100%', maxWidth: '600px', marginTop: '10px' }}
            />
          </HowToCard>
        

        
        
          <HowToCard title = "🎯 Accuracy & Dodge" className="howto-card card-7">

          <p>
            Every character in BreakPoint has two key combat stats that determine whether an ability hits:
          </p>

          <ul>
            <li><strong>Accuracy:</strong> The chance an ability has to hit the target. Most characters have 100% base accuracy unless stated otherwise.</li>
            <li><strong>Dodge:</strong> The target’s chance to evade incoming attacks. Dodge applies a flat chance to avoid damage and effects.</li>
          </ul>

          <p>
            The higher your character's accuracy, the higher their chance of hitting the opponent. Similarly, the higher the dodge percentage of your enemy, the more likely the chance for the attack to miss. 
          </p>

          <img
            src="/Images/dodgedAttack.png"
            alt="Diagram showing accuracy vs dodge calculation"
            style={{ width: '100%', maxWidth: '600px', marginTop: '10px' }}
          />
          </HowToCard>
        

        
         <HowToCard title = "🧮 Damage, Multipliers & Resistances" className="howto-card card-8">

        <p>
          BreakPoint uses a layered damage system that combines raw ability power with character-specific stats and resistances.
        </p>

        <h3>💥 Base Damage</h3>
        <p>
          Each ability deals a fixed amount of base damage (e.g., 40, 60, etc.).
        </p>

        <h3>📈 Damage Multipliers</h3>
        <p>
          Characters may have buffs or passives that apply a <strong>damage multiplier</strong> — a bonus percentage applied to all outgoing damage. For example, a 20% multiplier turns a 50-damage hit into 60 damage.
        </p>

        <h3>🛡️ Resistances</h3>
        <p>
          Characters can have resistances to specific <strong>damage types</strong> (e.g., Fire, Lightning, Physical). A resistance reduces incoming damage of that type by a flat percentage. For example, 25% Lightning resistance reduces 100 lightning damage to 75.
        </p>

        <h3>⚔️ Final Damage Formula</h3>
        <p>
          The final damage calculation is:
        </p>

        <pre style={{ backgroundColor: '#111', padding: '10px', borderRadius: '6px', overflowX: 'auto' }}>
        Final Damage = Base Damage × (1 + Damage Multiplier) × (1 - Resistance)
        </pre>

        <img
          src="/Images/DamageCalcDiagram.png"
          alt="Visual breakdown of damage calculation"
          style={{ width: '100%', maxWidth: '600px', marginTop: '10px' }}
        />
        <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
          (Image: Damage calculation flow showing base damage, bonus multiplier, and resistance applied in sequence.)
        </p>
        </HowToCard>
        


        
        

        
      
      <HowToCard title = "Cooldowns & Signature Charge" className="howto-card card-9">

        <p>
          Every non-passive ability has a cooldown — a set number of turns before it becomes usable again. Managing these cooldowns is essential to timing your damage and debuffs correctly.
        </p>

        <h3>⏳ Cooldowns</h3>
        <ul>
          <li>After using an ability, it becomes unavailable for a specific number of turns.</li>
          <li>Normal abilities usually have short cooldowns (1–2 turns).</li>
          <li>Skill abilities have longer cooldowns (often 2–4 turns).</li>
          <li>Signature abilities don’t use cooldown — they rely on charge.</li>
        </ul>

        <h3>⚡ Signature Charge</h3>
        <ul>
          <li>Characters build Signature Charge by using abilities that deal <strong>damage</strong>, apply <strong>shielding</strong>, or cause <strong>healing</strong>.</li>
          <li>The relationship is <strong>1:1</strong>: every point of damage, healing, or shielding contributes one point of charge.</li>
          <li>Once the charge bar is full, the character can use their powerful Signature ability.</li>
          <li>After using the Signature, charge is reset to zero.</li>
        </ul>

        <img
          src="/Images/chargeAndCD.png"
          alt="Comparison of ability cooldowns and charge system"
          style={{ width: '100%', maxWidth: '600px', marginTop: '10px' }}
        />
      </HowToCard>
      

      <HowToCard title = "🧬 Status Effects" className="howto-card card-10">

        <p>
          Abilities can apply various status effects to enemies or allies. These effects can last multiple turns and dramatically alter the flow of battle. Some of them are listed here
        </p>

        <table style={{ width: '100%', maxWidth: '600px', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid #555', padding: '8px' }}>Effect</th>
              <th style={{ borderBottom: '1px solid #555', padding: '8px' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px' }}>🔥 <strong>Solar Wind</strong></td>
              <td style={{ padding: '8px' }}>Deals damage over time each turn.</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>💉 <strong>Weaken</strong></td>
              <td style={{ padding: '8px' }}>Reduces the target’s damage output.</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>🛡️ <strong>Shield</strong></td>
              <td style={{ padding: '8px' }}>Absorbs incoming damage before HP is affected.</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>⭐ <strong>Buff</strong></td>
              <td style={{ padding: '8px' }}>Temporarily boosts a stat such as damage, healing, or defense.</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>🤨  <strong>Stun</strong></td>
              <td style={{ padding: '8px' }}>Prevents the target from acting on their next turn.</td>
            </tr>
          </tbody>
        </table>
        <img
          src="/Images/statusEffect.png"
          alt="Status effects displayed on character cards"
          style={{ width: '100%', maxWidth: '600px', marginTop: '10px' }}
        />
      </HowToCard>
      

        
        
          <HowToCard title = "🎮 Sample Turn Breakdown" className="howto-card card-11">

          <p>
            Here’s a quick look at how a single turn plays out in BreakPoint. Let’s say the current character is <strong>Sedra</strong>, a ranged lightning specialist.
          </p>

          <ol>
            <li><strong>Highlight:</strong> Sedra is visually highlighted as the active character.</li>
            <li><strong>Player Chooses Ability:</strong> The player selects Sedra’s <em>Skill</em> ability — <strong>Nova Slash</strong>.</li>
            <li><strong>Select Target:</strong> Valid enemies are shown. The player clicks on <strong>Mizca</strong>, a Rift Beast.</li>
            <li><strong>Execution:</strong> Sedra’s animation plays as she launches Nova Slash. On Hit, Mizca takes energy damage and is inflicted with the <em>Solar Wind</em> status effect.</li>
            <li><strong>Update UI:</strong> Mizca’s HP drops, and his status effects show a Nova Slash.</li>
            <li><strong>Cooldown/Charge:</strong> Nova Slash enters cooldown, and Sedra gains Signature Charge based on the damage dealt.</li>
            <li><strong>Next Turn:</strong> The next character in Speed order becomes active.</li>
          </ol>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <img src="/Images/turnFlowpt1.png" alt="Step 1" style={{ maxWidth: '500px', height: 'auto' }} />
              <img src="/Images/turnFlowpt2.png" alt="Step 2" style={{ maxWidth: '300px', height: 'auto' }} />
              <img src="/Images/turnFlowpt3.png" alt="Step 3" style={{ maxWidth: '500px', height: 'auto' }} />
              <img src="/Images/turnFlowpt4.png" alt="Step 4" style={{ maxWidth: '200px', height: 'auto' }} />
            </div>
          </HowToCard>
        
      </div>
      </div>
    );
  }